<?php

namespace App\Controller;

use App\Repository\GameRepository;
use App\Service\Calendar\Calendar;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Event;
use App\Form\EventType;
use DateTime;

class GameController extends AbstractController
{
    // #[Route('/game', name: 'app_game')]
    // public function index(): Response
    // {
    //     return $this->render('game/index.html.twig', [
    //         'controller_name' => 'GameController',
    //     ]);
    // }

    #[Route('/game/{game}', name: 'show_game')]
    public function showGame(int $game, GameRepository $gameRepo , Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
    {

        //form data
        $user = $this->getUser();
        $date = new \DateTime();
        $date->format("Y-m-d");
        $event = new Event;
        $form = $this->createForm(EventType::class, $event);
        // dd($_POST);
        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $event = $form->getData();
            $event->setUser($user);
            $event->setGame($gameObj);
            //$event->setDate($date);
            $date = $event->getDate()->format("Y-m-d");
            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
        }

        $calendarArray =  $calendarService->setupGameCalendarByDate(new DateTime(), $gameObj);
        
        return $this->render('game/index.html.twig', [
            'date' => $date,
            'game' =>  $gameObj,
            'calendarArray' => $calendarArray,
            'form' => $form->createView(),
        ]);
    }


    // /**
    //  * @Route("/slider", name="slider_form")
    //  */
    // public function slider(Request $request, ManagerRegistry $doctrine): Response
    // {   
    //     $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

    //     $user = $this->getUser();
    //     $date = new \DateTime();
    //     //$date->format('d-m-Y');
    //     $event = new Event;
        
    //     $form = $this->createForm(EventType::class, $event);
        
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {

    //         $event = $form->getData();
    //         $event->setUser($user);
    //         $event->setDate($date);

    //         $entityManager = $doctrine->getManager();
    //         $entityManager->persist($event);
    //         $entityManager->flush();
    //     }
    //     return $this->render('form/index.html.twig', [
    //         'form' => $form->createView(),
    //     ]);
    // }
}
