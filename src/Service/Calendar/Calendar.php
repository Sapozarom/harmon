<?php

namespace App\Service\Calendar;

class Calendar 
{   
    private $calendarArray = array();

    private $month;

    private $nextRow = 0;
    
    private $nextCol = 0;

    public function setupCalendarByDate($date)
    {   
        //name of month to JSON table
        $monthName =  $date->format('F');

        //Starting day of the month => row:0 col:$firstDayOfMonthNumber

        $firstDayOfMonthString = $date->format('Y-m-01');
        $firstDayOfMonthDate = new \DateTime($firstDayOfMonthString);
        $firstDayOfMonthNumber=   $firstDayOfMonthDate->format('w');
        if ($firstDayOfMonthNumber == 0) {
            $firstDayOfMonthNumber = 7;
        }

        //number of last day of month
        $lastDayOfMonth = $date->format('Y-m-t');
        $lastDayOfMonthDate = new \DateTime($lastDayOfMonth);
        $lastDayOfMonthNumber = $lastDayOfMonthDate->format('d');

        //previous month
        $reaminingDays = $firstDayOfMonthNumber - 1;

        $lastDayOfPreviousMonthDate = $firstDayOfMonthDate->modify("-1 days");
        $lastDayOfPreviousMonthNumber = $lastDayOfPreviousMonthDate->format('d');
        

        // row:0, col:0
        $start = $lastDayOfPreviousMonthNumber - $reaminingDays + 1;
        //adding previous month to table
        $this->fillCalendarTable($reaminingDays, $start);


        //adding current month to the table
        $this->fillCalendarTable($lastDayOfMonthNumber, 1);


        //adding next month to array
        $nextMonthRemainingDays = (5 - $this->nextRow) * 7 + (7 - $this->nextCol);
        
        $this->fillCalendarTable($nextMonthRemainingDays, 1);

        dd($this->callendarArray);

        return $lastDayOfMonthNumber;
    }

    public function fillCalendarTable($numberOfDays, $firsDay)
    {
        for ($i=0; $i < $numberOfDays ; $i++) { 

            $day = $firsDay + $i;

            $this->callendarArray[$this->nextRow][$this->nextCol] = $day;

            if ($this->nextCol == 6) {
                $this->nextCol = 0;
                $this->nextRow++;
            } else {
                $this->nextCol++;
            }
        }
    }
}