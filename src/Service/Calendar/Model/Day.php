<?php

namespace App\Service\Calendar\Model;

use App\Entity\Game;

class Day
{
    private $number;

    private $date;

    private Game $game;

    private $events = array();

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
}