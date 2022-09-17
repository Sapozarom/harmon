<?php

namespace App\Controller;

use App\Repository\GameRepository;
use App\Service\Calendar\Calendar;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
    public function showGame(int $game, GameRepository $gameRepo , Calendar $calendarService): Response
    {
        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $calendarArray =  $calendarService->setupCalendarByDate(new DateTime());
        //dd($calendarArray);

        
        return $this->render('game/index.html.twig', [
            'game' =>  $gameObj,
            'calendarArray' => $calendarArray,
        ]);
    }
}
