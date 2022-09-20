<?php

namespace App\Service\Calendar\Model;

use App\Entity\Game;

class Day
{
    private $number;

    private $date;

    private Game $game;

    private $events = array();  

    private $playersLeftToVote;

    private $availableHours = array();

    private $start;

    private $finish;


    //status can be [EMPTY, VOTED, GAMEDAY, CANCALED]
    private $status;

    public function setNumber(int $number)
    {
        $this->number = $number;
    }

    public function getNumber()
    {
        return $this->number;
    }

    public function setDate($date)   
    {   
        $this->date = $date;
        $this->setNumber($date->format('d'));
        return $this;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setGame(Game $game)
    {
        $this->game = $game;
    }

    public function getGame()
    {
        return  $this->game;
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

    public function generateStatus($game)
    {
        $players = $game->getPlayers();

        $voteArray = array();

        // $checkArray = array();

        $this->playersLeftToVote = count($players);

        foreach ($players as $player) {
            $voteArray[$player->getId()] = array();
            // $checkArray[$player->getId()] = array();
        }
        
        foreach ($this->events as $event) {
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

        
        if(count($this->events) == 0){
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
                   }
                }
                $this->status="GAMEDAY";
            } 
            
            if (count($paths) == 0) {
                $this->status="MISSED";
            }

            $this->availableHours = $paths;
        
        }
    }
}