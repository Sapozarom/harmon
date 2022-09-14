<?php

namespace App\Controller;

use App\Entity\Event;
use App\Form\EventType;
use App\Repository\GameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;

class FormController extends AbstractController
{
    /**
     * @Route("/setup", name="app_form")
     */
    public function index(GameRepository $gr): Response
    {   
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $user = $this->getUser();
        
        $games = $gr->findAll();

        foreach ($games as $game) {
            $game->setCreatedBy($user);
        }
        dd($games);
        return $this->render('form/index.html.twig', [
            'controller_name' => 'FormController',
        ]);
    }

    /**
     * @Route("/slider", name="slider_form")
     */
    public function slider(Request $request, ManagerRegistry $doctrine): Response
    {   
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $user = $this->getUser();
        $date = new \DateTime();
        //$date->format('d-m-Y');
        $event = new Event;
        
        $form = $this->createForm(EventType::class, $event);
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $event = $form->getData();
            $event->setUser($user);
            $event->setDate($date);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
        }
        return $this->render('form/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
