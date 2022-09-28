<?php

namespace App\Controller;

use App\Repository\GameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
// use Doctrine\ORM\EntityManagerInterface;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {   


        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    #[Route('/my-activities', name: 'my_activities')]
    public function showGamesAction(GameRepository $gameRepo): Response
    {   
        
        $user = $this->getUser();
        $uid = $user->getId();
        //dd($uid);
        $playedGames = $gameRepo->findGamesInProgress($uid);
        $createdGames = $gameRepo->findGamesCreatedByUser($user);
        // dd($playedGames,$createdGames);
        return $this->render('homepage/games.html.twig', [
            'createdGames' => $createdGames,
            'userId' => $uid,
        ]);
    }
}
