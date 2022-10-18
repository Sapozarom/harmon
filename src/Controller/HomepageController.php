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

    #[Route('/api/homepage/nav', name: 'api_homepage_nav')]
    public function getNavInfo(): Response
    {      

        if ($this->getUser()) {
            return $this->json([
                'user'  => $this->getUser()->getId(),
            ]);
        } else {
            return $this->json([
                'user'  => null,
            ]);
        }

        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    #[Route('/api/my-activities', name: 'api_my_activities')]
    public function getUserActivitiesAction(GameRepository $gameRepo): Response
    {   
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $playedGames = $gameRepo->findUserGames($user->getId());
        // dd($playedGames);
        return $this->json([
            'activityTable'  => $playedGames,
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

    #[Route('/readme', name: 'app_readme')]
    public function showReadmeAction(GameRepository $gameRepo): Response
    {   


        return $this->render('homepage/readme.html.twig', [

        ]);
    }
}
