<?php

namespace App\Repository;

use App\Entity\Day;
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

    public function findDayByDateAndGameId($date, $game) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date = :date')
        ->setParameter('date', $date)
        ->getQuery()
        ->getResult();

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
