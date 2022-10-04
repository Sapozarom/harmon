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
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $uid = $user->getId();
        $playedGames = $gameRepo->findGamesInProgress($uid);
        // $createdGames = $gameRepo->findGamesCreatedByUser($user);
        // dd($playedGames,$createdGames);
        return $this->render('homepage/games.html.twig', [
            'userId' => $uid,
            'playedGames' => $playedGames,
        ]);
    }

    #[Route('/README', name: 'app_readme')]
    public function showReadmeAction(GameRepository $gameRepo): Response
    {   


        return $this->render('homepage/readme.html.twig', [

        ]);
    }
}
