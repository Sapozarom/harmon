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

    private $matchedVotes = array();

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

    public function generateStatus($players)
    {
        //$players = $this->game->getPlayers();

        $idArray = array();

        $this->playersLeftToVote = count($players);

        foreach ($players as $player) {
            $idArray[$player->getId()] = array();
        }
        
        foreach ($this->events as $event) {
            $voter = $event->getUser()->getId();
            if (!($event->isVote())) {
                $this->status="CANCELED";
            }
            if (isset($idArray[$voter])) {
                if (count($idArray[$voter]) == 0) {
                    $this->playersLeftToVote = $this->playersLeftToVote - 1;
                }
                array_push($idArray[$voter], $event);
            }
        }
        usort($idArray, function($a, $b){
            return count($a) > count($b);
         });

        // dd($idArray);
        if(count($this->events) == 0){
            $this->status="EMPTY";
            $this->playersLeftToVote = NULL;
            
        } elseif (!(isset($this->status)) && $this->playersLeftToVote > 0) {
            $this->status="VOTED";
        } elseif ($this->playersLeftToVote == 0) {

            
            //$row = 0;
            
            foreach ($idArray as $playerVotes) {
                
                $col = 0;
                foreach ($playerVotes as $event) {
                    $start = $event->getStart();
                    $finish = $event->getFinish();

                    if(!(isset($this->matchedVotes[$col])))
                    {
                        $this->matchedVotes[$col] = [$start , $finish];
                    } else {
                        foreach ($this->matchedVotes as $match) {
                            dump($match);
                            if ($start > $match[0]) {
                                $this->matchedVotes[$col][0] = $start;
                            }

                            if ($finish < $match[1]) {
                                $this->matchedVotes[$col][1] = $finish;
                            }
                            dump($match, $this->matchedVotes);
                        }
                    }
                    $col++;
                    //dump($col);
                }
            }

            dd($idArray, $this->matchedVotes);

            $this->status="GAMEDAY";
        }
    }
}