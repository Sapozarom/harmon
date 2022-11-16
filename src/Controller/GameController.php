<?php

namespace App\Controller;

use App\Entity\Day;
use App\Repository\GameRepository;
use App\Service\Calendar\Calendar;
use App\Service\DayManager\DayManager;
use App\Service\CalendarManager\CalendarManager;
use App\Repository\DayRepository;
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
    public function sendVote(int $game, GameRepository $gameRepo , DayRepository $dayRepo, Request $request, ManagerRegistry $doctrine, DayManager $dayMng): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();
        // $date = new \DateTime();
        $date = new DateTime('today midnight');
        // $dateString = $date->format("Y-m-d");
        $event = new Event;

        $gameObj = $gameRepo->findOneBy(['id' => $game]);
        // $day = $gameObj->getDays();
        $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);
        
        $newForm = $this->createForm(VoteType::class);
        $newForm->handleRequest($request);

        if ($newForm->isSubmitted() && $newForm->isValid()) {

            $event = $newForm->getData();
            $event->setUser($user);
            $event->setGame($gameObj);

            $date = $event->getDate();

            $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);

            if ($day == null) {
                $day = $dayMng->createNewDay($date, $gameObj);
            } else {
                $day = $day[0];
            }

            $day->addVote($event);

            // /$day->seteStatus();
            $day->updateStatus();

            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
            
            return $this->json([
                'message'  => 'success',
                'status' => $day->getStatus(),
            ], 200);
        }
        
        return $this->json([
            'message'  => 'fail',
        ]);
    }

    #[Route('api/calendar/{game}', name: 'api_get_calendar')]
    public function getCallendarInfo(int $game, GameRepository $gameRepo , DayRepository $dayRepo, CalendarManager $calendarMng, ): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();
        $date = new \DateTime('today midnight');
        $dateString = $date->format("Y-m-d");
        // dd($_POST);
        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $calendarArray = $calendarMng->setupCalendar($date, $gameObj, $user);

        $currentDay = $dayRepo->getDayInfo($dateString, $gameObj, $user);

        if ($currentDay == null) {
            // $dayData = new Day;
            $dayData['date'] = $date;
            $dayData['status'] = 'EMPTY';
            $dayData['userStatus'] = null;
            $data['userStatu'] = false;
            // $data['voters'] = array();
            $data['remainingVoters'] = count($gameObj->getPLayers()) ;
        } else {
            $dayData = $currentDay;
        }

        return $this->json([
            'calendar'  => $calendarArray,
            // 'currentDay' => $dayData,
            // 'date'=> $currentDay['date'],
        ]);
    }

    #[Route('api/day/{game}/{date}', name: 'api_get_day')]
    public function GetDayInfo(int $game, string $date, GameRepository $gameRepo , DayRepository $dayRepo): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $dayInfo = $dayRepo->getDayInfo($date, $gameObj, $user);

        // if ($dayInfo == null) {
        //     $dayData['date'] = new DateTime($date) ;
        //     $dayData['status'] = 'EMPTY';
        //     $dayData['playersLeftToVote'] = [];
        //     $dayData['number'] = intval(substr($date,8,2)); 
        // } else {
        //     $dayData = $dayInfo[0];
        //     $dayData['number'] = intval($dayInfo[0]['date']->format('d')); 
        // }

        return $this->json([
            'dayInfo' => $dayInfo,
        ]);
    }

    #[Route('/test/status', name: 'app_test')]
    public function testStatus(DayRepository $dayRepo, ManagerRegistry $doctrine): Response
    {
        $dayObj = $dayRepo->findOneBy(['id' => 107]);

        $dayObj->updateStatus();

        $entityManager = $doctrine->getManager();
        $entityManager->persist($dayObj);
        $entityManager->flush();
        return $this->json([
            'msg'  => 'finished',
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
