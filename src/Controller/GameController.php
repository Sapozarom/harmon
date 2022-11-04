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
use App\Entity\Game;
use App\Form\EventType;
use App\Form\GameType;
use App\Form\VoteType;
use App\Form\JoinGameType;
use DateTime;

class GameController extends AbstractController
{

    #[Route('/party/show/{game}', name: 'show_game')]
    public function showGameAction(int $game, GameRepository $gameRepo , Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
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
            $date = $event->getDate()->format("Y-m-d");
            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
        }
        
        $newForm = $this->createForm(VoteType::class);
        $newForm->handleRequest($request);

        if ($newForm->isSubmitted() && $newForm->isValid()) {
            $event->setUser($user);
            $event->setGame($gameObj);
            $event = $newForm->getData();
            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
            dd('succes');
        } 

        $calendarArray =  $calendarService->setupGameCalendarByDate(new DateTime(), $gameObj, $user);
        
        return $this->render('game/index.html.twig', [
            'date' => $date,
            'game' =>  $gameObj,
            'calendarArray' => $calendarArray,
            'form' => $form->createView(),
            'newForm' => $newForm->createView(),
            'userId' => $user->getId(),
        ]);
    }


    #[Route('/api/send-vote/{game}', name: 'api_send_vote')]
    public function sendVote(int $game, GameRepository $gameRepo , Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();
        $date = new \DateTime();
        $date->format("Y-m-d");
        $event = new Event;
        // $form = $this->createForm(EventType::class, $event);
        // dd($_POST);
        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        // $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
        //     $event = $form->getData();
        //     $event->setUser($user);
        //     $event->setGame($gameObj);
        //     $date = $event->getDate()->format("Y-m-d");
        //     $entityManager = $doctrine->getManager();
        //     $entityManager->persist($event);
        //     $entityManager->flush();
        // }
        
        $newForm = $this->createForm(VoteType::class);
        $newForm->handleRequest($request);

        if ($newForm->isSubmitted() && $newForm->isValid()) {

            $event = $newForm->getData();
            $event->setUser($user);
            $event->setGame($gameObj);
            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
            return $this->json([
                'message'  => 'success',
            ]);
        } 
        // else {
        //     $errors = $newForm->getErrors();
        //     dd($errors);
        //     // $errors = $newForm['date']->getErrors();
        //     return $this->json([
        //         'message'  =>$errors,
        //     ]);
        // }

        
        return $this->json([
            'message'  => 'fail',
        ]);
    }

    #[Route('api/calendar/{game}', name: 'sapi_get_callendar')]
    public function getCallendarInfo(int $game, GameRepository $gameRepo , Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();
        $date = new \DateTime();
        $date->format("Y-m-d");
        // dd($_POST);
        $gameObj = $gameRepo->findOneBy(['id' => $game]);


        $calendarArray =  $calendarService->setupGameCalendarByDateApi(new DateTime(), $gameObj, $user);
        return $this->json([
            'calendar'  => $calendarArray,
        ]);

    }

    #[Route('/game/create', name: 'app_game_create')]
    public function createGameAction(Request $request, ManagerRegistry $doctrine): Response
    {

        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $game = new Game;

        $form = $this->createForm(GameType::class, $game);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $game = $form->getData();
            $game->setCreatedBy($user);
            $game->addPlayer($user);
            $game->setLocked(false);

            $slug = bin2hex(random_bytes(8));

            $game->setSlug($slug);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($game);
            $entityManager->flush();
        }

        

        return $this->render('game/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/game/invite/{slug}', name: 'app_game_invite')]
    public function inviteToGameAction(string $slug, ManagerRegistry $doctrine, GameRepository $gameRepo, Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $game = $gameRepo->findOneBy(['slug' => $slug]);
        $playerCheck = $gameRepo->findIfIsMember($user, $game);

        $acceptForm = $this->createForm(JoinGameType::class);

        $acceptForm->handleRequest($request);

        if ($game->isLocked()) {
            return $this->render('game/invite.html.twig', [
                'status' => 'locked',
            ]);
        }
        
        if ($_POST) {
            if (isset($_POST['join_game']['yes']) &&!($playerCheck)) {
                $game->addPlayer($user);

                $entityManager = $doctrine->getManager();
                $entityManager->persist($game);
                $entityManager->flush();

                return $this->redirectToRoute('show_game', ['game' => $game->getId()]);

            } elseif (isset($_POST['join_game']['no'])) {
                
                return $this->redirectToRoute('my_activities', ['game' => $game->getId()]);
            }
        } else {

           
            
            // CHECK IF PLAYER IS ALREADY A MEMBER
            
    
            if ($playerCheck) {
    
                return $this->render('game/invite.html.twig', [
                    'status' => 'member',
                ]);
            }
        }
        
        return $this->render('game/invite.html.twig', [
            'status' => 'invite',
            'slug' => $slug,
            'accForm' => $acceptForm->createView(),
        ]);
    }
    #[Route('/game/host-options/{game}', name: 'app_host_options')]
    public function showOptionsAction(int $game, GameRepository $gameRepo , Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
    {

        
        return $this->render('game/hostOptions.html.twig', [
            // 'date' => $date,
            // 'game' =>  $gameObj,
            // 'calendarArray' => $calendarArray,
            // 'form' => $form->createView(),
            // 'userId' => $user->getId(),
        ]);
    }
}
