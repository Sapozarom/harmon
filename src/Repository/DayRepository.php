<?php

namespace App\Repository;

use App\Entity\Day;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use LDAP\Result;

/**
 * @extends ServiceEntityRepository<Day>
 *
 * @method Day|null find($id, $lockMode = null, $lockVersion = null)
 * @method Day|null findOneBy(array $criteria, array $orderBy = null)
 * @method Day[]    findAll()
 * @method Day[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DayRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Day::class);
    }

    public function add(Day $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Day $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getDayInfo($date, $game, $user) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        // ->leftJoin('d.voted', 'voted')
        // ->select('d.date, d.status, count(d.id)')
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date = :date')
        ->setParameter('date', $date)
        ->groupBy('d')
        ->getQuery()
        ->getResult();


        // dd($result[0]);
        if ($result == null) {
            $dayData['date'] = new DateTime($date) ;
            $dayData['status'] = 'EMPTY';
            $dayData['number'] = intval(substr($date,8,2)); 
            $dayData['monthNumber'] = intval(substr($date,5,2)); 
            $dayData['remainigVoters'] = count($game->getPlayers());
            $dayData['playerStatus'] = false;
            $dayData['hours'] = [];

        } else {
            // $dayData = $result[0];
            $dayData['status'] = $result[0]->getStatus();
            $dayData['date'] = $result[0]->getDate();
            $dayData['number'] = intval($result[0]->getDate()->format('d')); 
            $dayData['monthNumber'] = intval($result[0]->getDate()->format('m')); 
            $dayData['remainingVoters'] = count($game->getPlayers()) -  count($result[0]->getVoted());
            $dayData['playerStatus'] = false;
            $dayData['hours'] = [];

            foreach ($result[0]->getVoted() as $voter) {
                if ($user->getId() == $voter->getId()) {
                    $dayData['playerStatus'] = true;
                }
            }

            foreach ($result[0]->getAvailableHours() as $range) {
                $match=array();
                $match['start'] = $range[0];
                $match['finish'] = $range[1];
                array_push($dayData['hours'] , $match);
            }


        }

        // if ($dayInfo == null) {
        //     $dayData['date'] = new DateTime($date) ;
        //     $dayData['status'] = 'EMPTY';
        //     $dayData['playersLeftToVote'] = [];
        //     $dayData['number'] = intval(substr($date,8,2)); 
        // } else {

        // }

        // dd($dayData);
        return $dayData;
    }

    public function findDayByDateAndGameId($date, $game) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date = :date')
        ->setParameter('date', $date)
        ->getQuery()
        ->getResult();

        // dd($result);
        return $result;
    }

    public function getDaysForCalendar($game, $firstDay, $lastDay) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date >= :firstDay')
        ->setParameter('firstDay', $firstDay)
        ->andWhere('d.date <= :lastDay')
        ->setParameter('lastDay', $lastDay)
        ->getQuery()
        ->getResult();

        return $result;
    }

}
