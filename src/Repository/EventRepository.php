<?php

namespace App\Repository;

use App\Entity\Event;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Event>
 *
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    public function add(Event $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Event $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Event[] Returns an array of Event objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

    public function findEventsByDate($date)
    {
        $qb = $this->createQueryBuilder('e');

        $result = $qb
        ->andWhere('e.date = :val')
        ->setParameter('val', $date)
        ->orderBy('e.id', 'ASC')
        ->getQuery()
        ->getResult();

        // if ($reasult !=null) {
        //     dd($reasult);
        // }

        return $result;


    }


    public function  findGameEventsByDate($date, $gameId)
    {
        $qb = $this->createQueryBuilder('e');

        $result = $qb
        ->andWhere('e.date = :val')
        ->setParameter('val', $date)
        ->andWhere('e.game = :gameId')
        ->setParameter('gameId', $gameId)
        ->orderBy('e.id', 'ASC')
        ->getQuery()
        ->getResult();

        // if ($reasult !=null) {
        //     dd($reasult);
        // }

        return $result;
    }

    public function findUserVotes($game, $date, $user)
    {   
        $dateFormat = new DateTime($date);
        $qb = $this->createQueryBuilder('e');
        $result = $qb
        ->andWhere('e.user = :user')
        ->setParameter('user', $user)
        ->andWhere('e.date = :date')
        ->setParameter('date', $dateFormat)
        ->andWhere('e.game = :gameId')
        ->setParameter('gameId', $game)
        ->orderBy('e.start', 'ASC')
        ->getQuery()
        ->getResult();

        $voteArray = array();

        foreach ($result as $event) {
            $vote['id'] = $event->getId();
            $vote['range'] = $event->createRangeString();

            array_push($voteArray, $vote);
        }

        // $jsonArray = json_encode($voteArray);

        return $voteArray;

        // dd($jsonArray);
    }
//    public function findOneBySomeField($value): ?Event
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
