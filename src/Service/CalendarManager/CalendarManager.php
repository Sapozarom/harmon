<?php

namespace App\Service\CalendarManager;

// use App\Repository\EventRepository;
// use App\Service\Calendar\Model\Day;

use App\Entity\Day;
use App\Repository\DayRepository;
use Doctrine\ORM\EntityManagerInterface;



class CalendarManager
{   
    private $user;

    private $game;

    private $eventRepo;

    private $nextRow = 0;
    
    private $nextCol = 0;

    private $monthNumber;

    private $calendarArray = array();



    public function __construct(EntityManagerInterface $em, DayRepository $dayRepo)
    {
        $this->entityManager = $em;
        // $this->eventRepo = $er;
        $this->dayRepo = $dayRepo;
    }

    public function setupCalendar($date, $game, $user)
    {      
        // $this->game = $game;
        // $this->user = $user;
        // $this->gameId = $game->getId();
        $this->players = $game->getPlayers();
        $this->numberOfPlayers = count($game->getPlayers());
        //name of month to JSON table
        $this->monthNumber =  $date->format('m');

        //Starting day of the month => row:0 col:$firstDayOfMonthNumber

        $firstDayOfMonthString = $date->format('Y-m-01');
        $firstDayOfMonthDate = new \DateTime($firstDayOfMonthString);
        // $firstDayOfMonthDateVar = clone $firstDayOfMonthDate;
        $firstDayOfMonthNumber=   $firstDayOfMonthDate->format('w');
        
        if ($firstDayOfMonthNumber == 0) {
            $firstDayOfMonthNumber = 7;
        }

        //number of last day of month
        $lastDayOfMonth = $date->format('Y-m-t');
        $lastDayOfMonthDate = new \DateTime($lastDayOfMonth);
        // $lastDayOfMonthNumber = $lastDayOfMonthDate->format('d');

        //previous month
        $reaminingDays = $firstDayOfMonthNumber - 1;
        $this->monthNumber--;
        $lastDayOfPreviousMonthDate = $firstDayOfMonthDate->modify("-1 days");
        $substractor = -$reaminingDays + 1;
        $firstDayInCalendar = $lastDayOfPreviousMonthDate->modify("$substractor days");
        
        $lastDayInCalendar = clone $firstDayInCalendar;

        $lastDayInCalendar->modify("41 days");

        // empty date array

        $dateArray = array();
        
        for ($day=0; $day < 42; $day++) {

            $tempDate = clone $firstDayInCalendar;

            $keyDate = $tempDate->modify("$day days");
            $key = $keyDate->format('Y-m-d');
            $dateArray[$key] = null;         
        }

        // get all voted days
        $activeDayArray = $this->dayRepo->getDaysForCalendar($game, $firstDayInCalendar, $lastDayInCalendar);

        // populate date array with fetched data
        
        foreach ($activeDayArray as  $activeDay) {
            $key = $activeDay->getDate()->format('Y-m-d');
            $dateArray[$key] = $activeDay;
        }

        // format to calendar table
        foreach ($dateArray as $key => $date) {
            if ($date == null) {
                $tempDay = new Day;
                $tempDay->setGame($game);
                $tempDay->setStatus('EMPTY');
                $emptyDate = new \DateTime($key);
                $tempDay->setDate($emptyDate);
                // $tempDay->clearVotes();
                $currentDay = $tempDay;
                // $date->setEvents() = [];
            } else {
                // $date->clearVotes();
                $currentDay = $date;
            }

            $data['number'] = intval($currentDay->getDate()->format('d'));
            $data['monthNumber'] = intval($currentDay->getDate()->format('m'));
            $data['date'] = $currentDay->getDate();
            
            if ($currentDay->getDate() == new \DateTime('today midnight')) {
                $data['today'] = true;
            } else {
                $data['today'] = false;
            }

            $data['userStatu'] = false;
            // $data['voters'] = array();
            $data['remainingVoters'] = count($game->getPlayers()) - count($currentDay->getVoted());

            foreach ($currentDay->getVoted() as $voter) {
                // array_push($data['voters'], $voter->getId());
                
                if ( $user->getId() == $voter->getId()) {
                    $data['userStatu'] = true;
                }
            }



            // $data['playersLeftToVote'] = $currentDay->getPlayersLeftToVote();
            // $data['currentMonth'] = null;
            // $data['availableHours'] = $currentDay->getAvailableHours();

            $this->calendarArray[$this->nextRow][$this->nextCol] = $data;

            $this->nextCol++;

            if ($this->nextCol > 6) {
                $this->nextCol = 0;
                $this->nextRow++;
            }
        }
        // dd($activeDayArray, $dateArray, $this->calendarArray);
        return $this->calendarArray;
        // dd($firstDayInCalendar, $lastDayInCalendar);

    }
}