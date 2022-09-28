<?php

namespace App\Controller;

use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    #[Route('/event', name: 'app_event')]
    public function index(): Response
    {
        return $this->render('event/index.html.twig', [
            'controller_name' => 'EventController',
        ]);
    }

    #[Route('/get-user-votes/{game}/{date}', name: 'api_get_user_votes')]
    public function getUserVotes(int $game, string $date, EventRepository $eventRepo)    
    {
        $user = $this->getUser();
        // $date = '2022-09-08';
        $playerVotes = $eventRepo->findUserVotes($game, $date, $user);

        return new JsonResponse($playerVotes);
        
        // dd($playerVotes);
    }

    #[Route('/event/delete/{id}', name: 'api_get_player_votes')]
    public function deleteUserVote(int $id, EventRepository $eventRepo)    
    {
        $user = $this->getUser();

        $deleteVote = $eventRepo->deleteUserVote($id, $user);

        return new JsonResponse(['id' => $id], 200);
        
    }
}
