<?php

namespace App\Service\Calendar;

use App\Repository\EventRepository;
use App\Service\Calendar\Model\Day;
use Doctrine\ORM\EntityManagerInterface;


class CalendarOld 
{   
    private $calendarArray = array();

    private $month;

    private $entityManager;

    private $players;

    private $monthNumber;

    private $numberOfPlayers;

    private $user;

    private $game;

    private $eventRepo;

    private $nextRow = 0;
    
    private $nextCol = 0;

    public function __construct(EntityManagerInterface $em, EventRepository $er)
    {
        $this->entityManager = $em;

        $this->eventRepo = $er;

    }

    public function setupGameCalendarByDate($date, $game, $user)
    {      
        $this->game = $game;
        $this->user = $user;
        // $this->gameId = $game->getId();
        $this->players = $game->getPlayers();
        $this->numberOfPlayers = count($game->getPlayers());
        //name of month to JSON table
        $this->monthNumber =  $date->format('m');

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

        dd($this->calendarArray);
        return $this->calendarArray;
    }


    private function fillCalendarTableObj($numberOfDays, $firsDayDate)
    {
                
        for ($i=0; $i < $numberOfDays ; $i++) { 

            $newDay = new Day; 

            $date = clone $firsDayDate;

            $newDate = $date->modify("+$i day");

            $newDay->setDate($newDate);
            if ($numberOfDays > 27) {
                $newDay->setCurrentMonth(true);
            }
            //$newDay->setGame($this->game);
            $newDayDateString = $newDate->format('Y-m-d');
            // $events = $this->eventRepo->findEventsByDate($newDayDateString);

            $events = $this->eventRepo->findGameEventsByDate($newDayDateString, $this->game->getId());

            if (count($events) > 0) {
                $playerVotes = $this->eventRepo->findUserVotes($this->game->getId(), $date->format('Y-m-d'), $this->user);

                if (count($playerVotes) > 0) {

                    $newDay->setVoted(true);
                    
                } 
            }

            $newDay->setEventArray($events);
            $newDay->generateStatus($this->game);
            
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