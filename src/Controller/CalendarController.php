<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\Calendar\Calendar;

class CalendarController extends AbstractController
{
    #[Route('/calendar', name: 'app_calendar')]
    public function displayCalendar(Calendar $calendarService): Response
    {
        $currentDate = new \DateTime();
        $calendarArray = $calendarService->setupCalendarByDate($currentDate);
        //$dayNumber = $currentDate->format('N');
        //dd($monthName);
        // dd($calendarArray);
        return $this->render('calendar/index.html.twig', [
            'calendarArray' => $calendarArray,
        ]);
    }
}
