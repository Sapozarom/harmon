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
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use DateTime;

class GameController extends AbstractController
{

    #[Route('/party/show/{game}', name: 'show_game')]
    public function showGameAction(int $game, GameRepository $gameRepo, Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
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
    public function sendVote(int $game, GameRepository $gameRepo, DayRepository $dayRepo, Request $request, ManagerRegistry $doctrine, DayManager $dayMng): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $date = new DateTime('today midnight');

        $event = new Event;

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);

        $newForm = $this->createForm(VoteType::class);
        $newForm->handleRequest($request);
        $isMember = $gameRepo->findIfIsActiveMember($user, $game);

        // chceck if is active
        if ($isMember == null) {
            return $this->json([
                'message'  => 'Yuo are not active member',
            ], 403);
        }

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

    #[Route('/api/get-votes/{game}/{date}', name: 'api_get_votes')]
    public function getVotes(int $game, string $date, EventRepository $eventRepo,  GameRepository $gameRepo, DayRepository $dayRepo, Request $request, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $dateObj = new DateTime($date);

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);

        $votes = $eventRepo->getUsersEventsByDate($gameObj, $dateObj, $user);

        if ($votes != null) {
            return $this->json([
                'message'  => 'success',
                'votes' => $votes,
            ], 200);
        } else {
            return $this->json([
                'message'  => 'fail',
                'votes' => [],
            ], 200);
        }
    }


    #[Route('api/game-data/{game}', name: 'api_get_game_data')]
    public function getGameDataInfo(int $game, GameRepository $gameRepo, DayRepository $dayRepo, CalendarManager $calendarMng,): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();

        // $dateString = $date->format("Y-m-d");
        // dd($_POST);
        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        // $calendarArray = $calendarMng->setupCalendar($date, $gameObj, $user);

        // $currentDay = $dayRepo->getDayInfo($dateString, $gameObj, $user);

        if ($gameObj != null) {
            // $dayData = new Day;
            $party['name'] = $gameObj->getName();
            $party['activity'] = $gameObj->getTitle();
            $party['description'] = $gameObj->getDescription();
            $party['activeMembers'] = array();
            $party['inactiveMembers'] = array();
            $party['host'] = $gameObj->getCreatedBy()->getId();
            $party['status']=$gameObj->isLocked();

            // dd($gameObj->getPlayers());
            foreach ($gameObj->getPlayers() as $player) {
                $new['id'] = $player->getId();
                $new['name'] = $player->getUsername();
                array_push($party['activeMembers'], $new);
            }

            foreach ($gameObj->getInactivePlayers() as $player) {
                $new['id'] = $player->getId();
                $new['name'] = $player->getUsername();
                array_push($party['inactiveMembers'], $new);
            }
            // $dayData['status'] = 'EMPTY';
            // $dayData['userStatus'] = null;
            // $data['userStatu'] = false;
            // $data['voters'] = array();
            // $data['remainingVoters'] = count($gameObj->getPLayers()) ;
        } else {
            // $dayData = $currentDay;
        }

        // dd($party);
        return $this->json([
            'partyInfo'  => $party,
            // 'currentDay' => $dayData,
            // 'date'=> $currentDay['date'],
        ]);
    }

    #[Route('api/calendar/{game}', name: 'api_get_calendar')]
    public function getCallendarInfo(int $game, GameRepository $gameRepo, DayRepository $dayRepo, CalendarManager $calendarMng,): Response
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
            $dayData['userStatu'] = false;
            // $data['voters'] = array();
            $dayData['remainingVoters'] = count($gameObj->getPLayers());
            $dayData['hours'] = [];
        } else {
            $dayData = $currentDay;
        }

        return $this->json([
            'calendar'  => $calendarArray,

        ]);
    }

    #[Route('api/day/{game}/{date}', name: 'api_get_day')]
    public function GetDayInfo(int $game, string $date, GameRepository $gameRepo, DayRepository $dayRepo): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $dayInfo = $dayRepo->getDayInfo($date, $gameObj, $user);

        return $this->json([
            'dayInfo' => $dayInfo,
        ]);
    }

    #[Route('api/game/make-me-inactive/{game}', name: 'api_make_me_inactive')]
    public function makeInactive(int $game,  GameRepository $gameRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $isActive = $gameRepo->findIfIsActiveMember($user, $gameObj->getId());

        // dd($isActive);
        if ($isActive != null) {
            $gameObj->removePlayer($user);
            $gameObj->addInactivePlayer($user);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();

            $message = "You are now inactive member of this party";
        } else {
            $message = "You are not active member";
        }

        return $this->json([
            'message' => $message,
        ]);
    }

    #[Route('api/game/change-user-status/{game}/{user}', name: 'api_change_user_status')]
    public function changeMemberStatus(int $game, int $user,  GameRepository $gameRepo, UserRepository $userRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $response = new Response();
        $host = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $userObj = $userRepo->findOneBy(['id' => $user]);

        $message = "You are mot host of this party";

        if ($gameObj->getCreatedBy() == $host) {

            $isActive = $gameRepo->findIfIsActiveMember($userObj, $gameObj->getId());
            $isInactive = $gameRepo->findIfIsInactiveMember($userObj, $gameObj->getId());

            if ($isActive != null) {
                $gameObj->removePlayer($userObj);
                $gameObj->addInactivePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
                $message = "User is now INACTIVE member of this party";
            } elseif ($isInactive != null) {
                $gameObj->addPlayer($userObj);
                $gameObj->removeInactivePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
                $message = "User is now ACTIVE member of this party";
            } else {
                $message = "User is not a member of this party";
            }
        }

        $response->setContent($message);
        $response->setStatusCode(Response::HTTP_OK);
        
        // sets a HTTP response header
        // $response->headers->set('Content-Type', 'text/html');
        // $response->body->set($message);
        
        // prints the HTTP headers followed by the content
        // $response->send();
        

        // return $this->json($response);
        return $this->json([
            'message' => $message,
        ]);
    }

    #[Route('api/game/remove-member/{game}/{user}', name: 'api_remove_member')]
    public function removeMember(int $game, int $user,  GameRepository $gameRepo, UserRepository $userRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $host = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $userObj = $userRepo->findOneBy(['id' => $user]);

        $message = "You are not host of this party";

        if ($gameObj->getCreatedBy() == $host && $gameObj->getCreatedBy() != $userObj) {

            $isActive = $gameRepo->findIfIsActiveMember($userObj, $gameObj->getId());
            $isInactive = $gameRepo->findIfIsInactiveMember($userObj, $gameObj->getId());

            if ($isActive != null) {
                $gameObj->removePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
            } elseif ($isInactive != null) {
                $gameObj->removeInactivePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
            } else {
                $message = "User is not a member of this party";
            }
        }

        return $this->json([
            'message' => $message,
        ]);
    }

    #[Route('api/game/delete-party/{game}', name: 'api_remove_member')]
    public function deleteParty(int $game,  GameRepository $gameRepo,  ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $host = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        // $message = "You are not host of this party";

        if ($gameObj->getCreatedBy() == $host ) {
            $entityManager = $doctrine->getManager();
            $entityManager->remove($gameObj);
            $entityManager->flush();
        }

        return $this->json([]);
    }

    #[Route('api/game/leave/{game}', name: 'api_leave_party')]
    public function leaveParty(int $game,  GameRepository $gameRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $isActive = $gameRepo->findIfIsActiveMember($user, $gameObj->getId());
        $isInactive = $gameRepo->findIfIsInactiveMember($user, $gameObj->getId());

        // dd($isActive);

        if ($gameObj->getCreatedBy() ==  $user) {
            $message = 'admin';
        } elseif ($isActive != null) {
            $gameObj->removePlayer($user);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();
            $message = 'success';
        } elseif ($isInactive != null) {
            $gameObj->removeInactivePlayer($user);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();
            $message = 'success';
        } else {
            $message = 'fail';
        }


        return $this->json([
            'message' => $message,
        ]);
    }
    
    #[Route('/api/game/create', name: 'api_game_create')]
    public function createGame(Request $request, ManagerRegistry $doctrine): Response
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

            return $this->json([
                'message' => 'success',
            ]);
        }

        return $this->json([
            'message' => 'fail',
        ], 400);
    }

    #[Route('/api/game/change-lock-status/{game}', name: 'api_game_change_lock_status')]
    public function changeGameLockStatus(Request $request, int $game, GameRepository $gameRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);
        $message = 'Something went wrong, check if you are host of this game ' . $gameObj->getName();

        if ($user == $gameObj->getCreatedBy() && $gameObj->isLocked()) {
            $gameObj->setLocked(false);
            $message = 'game is now ulocked (open for invitations)';
            
        } elseif ($user == $gameObj->getCreatedBy() && !$gameObj->isLocked()) {
            $gameObj->setLocked(true);
            $message = 'game is now locked (open for invitations)';
        }
        
        $entityManager = $doctrine->getManager();
        $entityManager->persist($gameObj);
        $entityManager->flush();

        return $this->json([
            'message' => $message,
        ], 200);
    }

    #[Route('/api/game/promote-to-host/{game}/{newHostId}', name: 'api_game_promoto_to_hoste')]
    public function changeHost(Request $request, int $game, int $newHostId, GameRepository $gameRepo, UserRepository $userRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);
        $newHostObj = $userRepo->findOneBy(['id' => $newHostId]);

        $newHostIsMember = $gameRepo->findIfIsMember( $newHostObj, $game);
        if ($user == $gameObj->getCreatedBy() && $newHostIsMember != null) {
            // $gameObj->setLocked(false);
            $gameObj->setCreatedBy($newHostObj);

            $message = 'Host has beed changed';

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();
            
            return $this->json([
                'message' => $message,
            ], 200);
            
        } else {
            $message = 'Something went wrong, check if you are host of this game and new host is it"s member';
            return $this->json([
                'message' => $message,
            ], 400);
        }
        



    }



    #[Route('/test/status', name: 'app_test')]
    public function testStatus(DayRepository $dayRepo, ManagerRegistry $doctrine): Response
    {
        $dayObj = $dayRepo->findOneBy(['id' => 147]);

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
        
        $playerCheck = $gameRepo->findIfIsMember($user, $game->getId());
        // dd($game, $game->getId(),$playerCheck);
        // dd();
        $acceptForm = $this->createForm(JoinGameType::class);

        $acceptForm->handleRequest($request);

        if ($game->isLocked()) {
            return $this->render('game/invite.html.twig', [
                'status' => 'locked',
            ]);
        }

        if ($_POST) {
            if (isset($_POST['join_game']['yes']) && !($playerCheck)) {
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
    public function showOptionsAction(int $game, GameRepository $gameRepo, Calendar $calendarService, Request $request, ManagerRegistry $doctrine): Response
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
