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
            ->leftJoin('g.inactivePlayers', 'i')
            ->andWhere('p.id = :val')
            ->setParameter('val', $userId)
            ->orWhere('i.id = :val')
            ->setParameter('val', $userId)
            ->orderBy('g.id', 'ASC')
            ->groupBy('g')
            ->getQuery()
            ->getResult();

            // dd($result);
            $partyList = array();

            if ($result !== null) {
               foreach ($result as $party) {

                // $active = 0;
                // $inactive = 0;
                $isUserActive = true;

                $newParty['id'] = $party->getId();
                $newParty['name'] = $party->getName();
                $newParty['title'] = $party->getTitle();
                $newParty['description'] = $party->getDescription();
                $newParty['locked'] = $party->isLocked();
                $newParty['slug'] = $party->getSlug();
                $newParty['hosted'] = $party->getCreatedBy()->getId();
                $newParty['players'] = count($party->getPlayers()) + count($party->getInactivePlayers());
                $newParty['activeMembers'] = count($party->getPlayers());

                foreach ($party->getInactivePlayers() as $activeMember) {
                    if ($activeMember->getId() == $userId) {
                        $isUserActive = false;
                    }
                }

                $newParty['isActive'] = $isUserActive;
                
                // dd($newParty);
                array_push($partyList, $newParty);
               }
            }

            // dd($partyList);
             
        return $partyList;
    }

    public function findIfIsMember($user, $gameId)
    {
        $result = false;

        $resultActive = $this->createQueryBuilder('g')
        ->join('g.players', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();

        if ($resultActive != null) {
           
        }

        $resultInactive = $this->createQueryBuilder('g')
        ->join('g.inactivePlayers', 'i')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('i.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();

        if ($resultInactive != null || $resultActive != null) {
            $result = true;
         }

        // dd($resultActive, $resultInactive,$user, $gameId);

         
    return $result;
    }

    public function findIfIsActiveMember($user, $gameId)
    {
        $result = $this->createQueryBuilder('g')
        ->join('g.players', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();
         
        return $result;
    }

    public function findIfIsInactiveMember($user, $gameId)
    {
        $result = $this->createQueryBuilder('g')
        ->join('g.inactivePlayers', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();
         
        return $result;
    }

    // public function deleteParty($partyId)
    // {
    //     $result = $this->createQueryBuilder('g')

    //     ->andWhere('g.id = :gameId')
    //     ->delete('g')
    //     ->setParameter('gameId', $partyId)
    //     ->getQuery()
    //     ->getResult();
         
    //     return $result;
    // }

}
