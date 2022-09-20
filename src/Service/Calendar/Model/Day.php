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

        $voteArray = array();

        $checkArray = array();

        $this->playersLeftToVote = count($players);

        foreach ($players as $player) {
            $voteArray[$player->getId()] = array();
            $checkArray[$player->getId()] = array();
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
                array_push($checkArray[$voter], 0);
            }
        }
        usort($voteArray, function($a, $b){
            return count($a) > count($b);
         });

         usort($checkArray, function($a, $b){
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
                $this->status="GAMEDAY";
            } else {
                $this->status="MISSED";
            }
           // dd($paths);

            

            // foreach ($voteArray as $row => $playerVotes) {
            //     foreach ($playerVotes as $col => $event) {

            //     }
            // }
            
            // $matchedVotes = array();
            // for ($row=0; $row < count($voteArray) ; $row++) { 
            //     $currentRow = $row;
            //     for ($col=0; $col < count($voteArray[$row]); $col++) { 
            //         $currentCol = $col;
            //         $curerntVote = $voteArray[$row][$col];
            //         $start = $curerntVote->getStart();
            //         $finish = $curerntVote->getFinish();

            //         for ($tempRow=0; $tempRow < count($voteArray) ; $tempRow++) {
            //             $match = 0;
            //             for ($tempCol=0; $tempCol < count($voteArray[$tempRow]); $tempCol++) { 
            //                 $tempVote = $voteArray[$tempRow][$tempCol];
            //                 $tempStart = $tempVote->getStart();
            //                 $tempFinish = $tempVote->getFinish();

            //                 if ($tempFinish >= $start && $tempStart <= $finish) {
            //                     $match++;
            //                     $start = max($start, $tempStart);
            //                     $finish = min($finish, $tempFinish);
            //                 }
            //             }

            //             if ($match == 0) {
            //                 $col++;
            //                 break;
            //             }
            //         }
            //     }
            // }

            // $paths = array();

            // $fullMatchArray = false;
            // $procesedVotes = 0;
            // while($procesedVotes < count($voteArray[0]))
            // {   
                
            //     // foreach ($voteArray[0] as $voteNumber => $playerVote) {
            //     for ($voteNumber=0; $voteNumber < count($voteArray[0]); $voteNumber++) {

            //         $playerVote = $voteArray[0][$voteNumber];
            //         $start = $playerVote->getStart();
            //         $finish = $playerVote->getFinish();
            //         $matchArray[0][$voteNumber] = 1;

            //         $matchArray =  $checkArray;

            //         $path = 0;
            //         while (!$fullMatchArray) {

            //             $currentRow = 1;

            //             for ($row= $currentRow  ; $row < count($voteArray)  ; $row++) { 
                            
            //                 $currentCol = 0;

            //                 $match = 0;
            //                 for ($col=$currentCol; $col< $voteArray[$row]; $col++) { 
            //                     $tempVote = $voteArray[$row][$col];
            //                     $tempStart = $tempVote->getStart();
            //                     $tempFinish = $tempVote->getFinish();

            //                     if ($tempFinish >= $start && $tempStart <= $finish) {
            //                         $match++;
            //                         $start = max($start, $tempStart);
            //                         $finish = min($finish, $tempFinish);
            //                         $matchArray[$row][$col] = 1;
            //                         $row++;
            //                         break;
            //                     } else {
            //                         $matchArray[$row][$col] = -1;
            //                     }
            //                 }

            //                 if ($match == 0) {
            //                     $voteNumber++;
            //                     break;
            //                 }

            //                 if ($row == count($voteArray) - 1) {
            //                     for ($i=1; $i < count($matchArray) ; $i++) { 
            //                         $check = array_search(0, $matchArray[$i]);

            //                         if ($check) {
            //                             $currentCol = $check;
            //                             break;
            //                         }
            //                     }
            //                 }
            //             }
            //         }   
            //     }
            // }


            

            // foreach ($voteArray as $row => $playerVotes) {


            //     foreach ($playerVotes as $col => $event) {
            //         $newCheckArray = $checkArray;
            //         $newCheckArray[$row][$col] = 1;
                    
            //         foreach ($voteArray as $key => $player) {
            //             foreach ($player as $number => $vote) {
            //                 if ($vote->getFinish() >= $event->getStart() && $vote->getStart() <= $event->getFinish()) {
            //                     $newCheckArray[$key][$number] = 1;
            //                 } else {
            //                     $newCheckArray[$key][$number] = 0;
            //                 }
            //             }
            //         }
            //     $this->matchedVotes[$row][$col] = $newCheckArray;
            //     }
            // }

            // $paths = array();

            // foreach ($voteArray[0] as $col => $playerVote) {
            //     $currentPath = [[0,$col]];
            //     $matchArray = $this->matchedVotes[$col];

            //     for ($i=1; $i <= count($voteArray) ; $i++) { 
            //         foreach ($matchArray[$i] as $key => $match) {
            //             # code...
            //         }
            //     }
            // }







            
        }
    }
}