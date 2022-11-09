<?php

namespace App\Service\Calendar\Model;

use App\Entity\Game;

class Day
{
    private $number;

    private $monthNumber;

    private $date;

    // private Game $game;

    private $events = array();  

    private $playersLeftToVote;

    private $availableHours = array();

    private $currentMonth;

    private $voted;


    //status can be [EMPTY, VOTED, GAMEDAY, CANCALED, MISSED]
    private $status;

    public function setNumber(int $number)
    {
        $this->number = $number;
    }

    public function getNumber()
    {
        return $this->number;
    }

    public function setMonthNumber(int $number)
    {
        $this->monthNumber = $number;
    }

    public function getMonthNumber()
    {
        return $this->monthNumber;
    }

    public function setDate($date)   
    {   
        $this->date = $date;
        $this->setNumber($date->format('d'));
        $this->setMonthNumber($date->format('m'));
        return $this;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setEventArray($eventarray)
    {
        $this->events = $eventarray;
    }

    public function getEvents()
    {
        return $this->events;
    }

    public function setStatus($status)  
    {
        $this->status = $status;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function setVoted($bool)  
    {
        $this->voted = $bool;
    }

    public function getVoted()
    {
        return $this->voted;
    }

    public function setPlayersLeftToVote($number)
    {
        $this->playersLeftToVote = $number;
    }

    public function getPlayersLeftToVote()
    {
        return  $this->playersLeftToVote;
    }

    public function getAvailableHours()
    {
        return $this->availableHours;
    }

    public function setCurrentMonth($bool)
    {
        $this->currentMonth = $bool;
    }

    public function isCurrentMonth()
    {   
        return $this->currentMonth;
    }

    public function generateStatus($game, $events)
    {
        $players = $game->getPlayers();

        $voteArray = array();

        // $checkArray = array();

        $this->playersLeftToVote = count($players);

        foreach ($players as $player) {
            $voteArray[$player->getId()] = array();
            // $checkArray[$player->getId()] = array();
        }
        
        foreach ($events as $event) {
            $voter = $event->getUser()->getId();
            if (!($event->isVote())) {
                $this->status="CANCELED";
            }
            if (isset($voteArray[$voter])) {
                if (count($voteArray[$voter]) == 0) {
                    $this->playersLeftToVote = $this->playersLeftToVote - 1;
                }
                array_push($voteArray[$voter], $event);
                // array_push($checkArray[$voter], 0);
            }
        }
        usort($voteArray, function($a, $b){
            return count($a) > count($b);
        });

        
        if(count($events) == 0){
            $this->status="EMPTY";
            $this->playersLeftToVote = NULL;
            
        } elseif (!(isset($this->status)) && $this->playersLeftToVote > 0) {
            $this->status="VOTED";
        } elseif ($this->playersLeftToVote == 0) {
            
            $paths = array();

            foreach ($voteArray[0] as $voteNumber => $vote) {
                
               array_push( $paths, [$vote->getStart(), $vote->getFinish()]);

                for ($row=1 ; $row < count($voteArray) ; $row++) { 
                    foreach ($paths as $key => $path) {
                        $match = 0;
                        $tempPath = $path;
                        
                        foreach ($voteArray[$row] as $col => $currentVote) {
                            $start = max($tempPath[0], $currentVote->getStart());
                            $finish = min($tempPath[1], $currentVote->getFinish());
                            
                            if ($start < $finish) {
                                $updatedPath = [$start, $finish];
                                
                                if ($match == 0) {
                                    $paths[$key] = $updatedPath;
                                } else {
                                    array_push($paths, $updatedPath);
                                }
                                $match++;
                            }
                        }

                        if ($match == 0) {
                            unset($paths[$key]);
                        }
                    }
                }
            }

            if (count($paths) > 0 ) {
                foreach ($paths as $key => $path) {
                   if (($path[1] - $path[0]) < $game->getMinSessionLength() ) {
                    unset($paths[$key]);
                   } else {
                    $range = $this->changeMinutesToHours($path[0],$path[1]);
                    array_push($this->availableHours, $range);
                   }

                }
                $this->status="GAMEDAY";
            } 
            
            if (count($paths) == 0) {
                $this->status="MISSED";
            }

            // $this->availableHours = $paths;
        
        }
    }

    public function changeMinutesToHours($start, $finish)
    {
        
        $startHour = intdiv($start, 60);
        $startMin = $start % 60;

        if ($startMin < 10) {
            // dd();
            $startMin = "00";
        }

        $finishHour = intdiv($finish, 60);
        $finishMin = $finish % 60;

        if ($finishMin < 10) {
            $finishMin = '00';
        }

        $range = $startHour . ':' . $startMin . '-' . $finishHour . ':' . $finishMin;

        // $startHour = (int) ($start / 60);

        // dd($range);

        return $range;
    }
}