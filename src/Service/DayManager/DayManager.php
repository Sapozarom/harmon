<?php

namespace App\Service\DayManager;

use App\Entity\Day;
use App\Repository\EventRepository;
use App\Repository\DayRepository;
use Doctrine\ORM\EntityManagerInterface;

class DayManager 
{
    
    private $month;
    private $dayRepo;
    private $entityManager;



    /**
     * @param EntityManagerInterface $em 
     * @param CardManager $cm | service that chenage game data into card object
     * @param ContainerBagInterface $params
     */
    public function __construct(EntityManagerInterface $em, DayRepository $dayRepo)
    {
        $this->entityManager = $em;
        $this->dayRepo = $dayRepo;
    }

    public function checkIfDayExist($date, $game)
    {
        $check = $this->dayRepo->findOneBy(['date' => $date]);
        return $check;
    }


    public function createNewDay($date, $game)
    {
        $newDay = new Day;
        $newDay->setDate($date);
        $newDay->setGame($game);
        $this->entityManager->persist($newDay);
        $this->entityManager->flush();

        return $newDay;
    }

}