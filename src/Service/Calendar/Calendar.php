<?php

namespace App\Service\Calendar;

use App\Repository\EventRepository;
use App\Service\Calendar\Model\Day;
use Doctrine\ORM\EntityManagerInterface;


class Calendar 
{   
    private $calendarArray = array();

    private $month;

    private $entityManager;

    private $eventRepo;

    private $nextRow = 0;
    
    private $nextCol = 0;

    public function __construct(EntityManagerInterface $em, EventRepository $er)
    {
        $this->entityManager = $em;

        $this->eventRepo = $er;

    }

    // public function getCallendarArray(Type $var = null)
    // {
    //     # code...
    // }

    public function setupGameCalendarByDate($date, $gameId)
    {      
        $this->gameId = $gameId;
        //name of month to JSON table
        $monthName =  $date->format('F');

        //Starting day of the month => row:0 col:$firstDayOfMonthNumber

        $firstDayOfMonthString = $date->format('Y-m-01');
        $firstDayOfMonthDate = new \DateTime($firstDayOfMonthString);
        $firstDayOfMonthDateVar = clone $firstDayOfMonthDate;
        $firstDayOfMonthNumber=   $firstDayOfMonthDate->format('w');
        if ($firstDayOfMonthNumber == 0) {
            $firstDayOfMonthNumber = 7;
        }

        //number of last day of month
        $lastDayOfMonth = $date->format('Y-m-t');
        $lastDayOfMonthDate = new \DateTime($lastDayOfMonth);
        $lastDayOfMonthNumber = $lastDayOfMonthDate->format('d');

        //previous month
        $reaminingDays = $firstDayOfMonthNumber - 1;

        $lastDayOfPreviousMonthDate = $firstDayOfMonthDate->modify("-1 days");
        // $lastDayOfPreviousMonthNumber = $lastDayOfPreviousMonthDate->format('d');
        

        // row:0, col:0
        // $start = $lastDayOfPreviousMonthNumber - $reaminingDays + 1;
        $substractor = -$reaminingDays + 1;
        $startDate = $lastDayOfPreviousMonthDate ->modify("$substractor days");
        
        //adding previous month to table

        $this->fillCalendarTableObj($reaminingDays, $startDate);

        //adding current month to the table

        $this->fillCalendarTableObj($lastDayOfMonthNumber, $firstDayOfMonthDateVar);


        //adding next month to array
        $nextMonthRemainingDays = (5 - $this->nextRow) * 7 + (7 - $this->nextCol);
        

        $this->fillCalendarTableObj($nextMonthRemainingDays, $firstDayOfMonthDateVar->modify("+1 months"));

    //    dd($this->calendarArray);
        // dd($this->calendarArray)
        return $this->calendarArray;
    }

    public function fillCalendarTable($numberOfDays, $firsDay)
    {
        for ($i=0; $i < $numberOfDays ; $i++) { 

            $day = $firsDay + $i;

            $this->callendarArray[$this->nextRow][$this->nextCol] = $day;

            if ($this->nextCol == 6) {
                $this->nextCol = 0;
                $this->nextRow++;
            } else {
                $this->nextCol++;
            }
        }
    }

    public function fillCalendarTableObj($numberOfDays, $firsDayDate)
    {
                
        for ($i=0; $i < $numberOfDays ; $i++) { 

            $newDay = new Day; 

            $date = clone $firsDayDate;

            $newDate = $date->modify("+$i day");

            $newDay->setDate($newDate);
            $newDayDateString = $newDate->format('Y-m-d');
            $events = $this->eventRepo->findEventsByDate($newDayDateString);

            $events = $this->eventRepo->findGameEventsByDate($newDayDateString, $this->gameId);

            $newDay->setEventArray($events);
            
            //read from game data
            $numberOfPlayers = 3;
            if ($events == null) {
                $newDay->setStatus('EMPTY');
            } elseif (count($events) == $numberOfPlayers) {
                $newDay->setStatus('GAMEDAY');
            } elseif (count($events) < $numberOfPlayers) {
                $newDay->setStatus('VOTED');
            }
            $this->calendarArray[$this->nextRow][$this->nextCol] =  $newDay;
            //$day = null; 
            if ($this->nextCol == 6) {
                $this->nextCol = 0;
                $this->nextRow++;
            } else {
                $this->nextCol++;
            }
        }
    }
}