<?php

namespace App\Repository;

use App\Entity\Game;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Game>
 *
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Game::class);
    }

    public function add(Game $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Game $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findGamesCreatedByUser(User $user)
    {
        $result = $this->createQueryBuilder('g')
           ->andWhere('g.createdBy = :val')
           ->setParameter('val', $user)
           ->orderBy('g.id', 'ASC')
           ->getQuery()
           ->getResult();
             
        return $result;

    }

    
    public function findGamesInProgress($userId)
    {
        $result = $this->createQueryBuilder('g')
            ->join('g.players', 'p')
            ->andWhere('p.id = :val')
            ->setParameter('val', $userId)
            ->orderBy('g.id', 'ASC')
            ->getQuery()
            ->getResult();
             
        return $result;

    }

    public function findUserGames($userId)
    {
        $result = $this->createQueryBuilder('g')
            ->leftJoin('g.players', 'p')
            ->leftJoin('g.createdBy', 'creator')
            // ->leftJoin('g.events', 'e')
            ->select('g.id, g.name, g.description, g.description, g.title , g.locked, count(g.id) as players, g.slug, creator.id as hosted')
            ->leftJoin('g.players', 'play')
            ->andWhere('p.id = :val')
            ->setParameter('val', $userId)
            ->orderBy('g.id', 'ASC')
            ->groupBy('g')
            ->getQuery()
            ->getResult();
             
        return $result;
    }

    public function findIfIsMember($user, $gameId)
    {
        $result = $this->createQueryBuilder('g')
        ->join('g.players', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId->getId())
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();
         
    return $result;
    }
//    /**
//     * @return Game[] Returns an array of Game objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('g.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Game
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
