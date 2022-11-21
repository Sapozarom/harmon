<?php

namespace App\Controller;

use App\Repository\DayRepository;
use App\Repository\EventRepository;
use Doctrine\Persistence\ManagerRegistry;
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

    #[Route('/api/vote/delete/{id}', name: 'api_delete_vote')]
    public function deleteVote(int $id, EventRepository $eventRepo,  DayRepository $dayRepo, ManagerRegistry $doctrine,)    
    {
        $user = $this->getUser();

        $vote = $eventRepo->deleteUserVote($id, $user);

        $dayObj = $dayRepo->findOneBy(['id' => $vote['dayId']]);

        $playersVotes = $eventRepo->findUserVotes($vote['gameObj'], $dayObj->getDate()->format('Y-m-d'), $user);

       
        if ($playersVotes == null) {
            $dayObj->removeVoted($user);
        }

        $dayObj->updateStatus($vote['voteType']);

        // dd($dayObj);
        $entityManager = $doctrine->getManager();
        $entityManager->persist($dayObj);
        $entityManager->flush();


        return new JsonResponse(['id' => $id], 200);
        
    }

    #[Route('/event/delete/{id}', name: 'api_get_player_votes')]
    public function deleteUserVote(int $id, EventRepository $eventRepo)    
    {
        $user = $this->getUser();

        $deleteVote = $eventRepo->deleteUserVote($id, $user);

        return new JsonResponse(['id' => $id], 200);
        
    }
}
