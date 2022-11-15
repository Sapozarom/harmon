<?php

namespace App\Entity;

use App\Repository\DayRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DayRepository::class)]
class Day
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'days')]
    private ?Game $game = null;



    #[ORM\OneToMany(mappedBy: 'day', targetEntity: Event::class)]
    private ?Collection $votes;

    //status can be [EMPTY, VOTED, GAMEDAY, CANCALED, MISSED]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $status = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $availableHours = [];

    #[ORM\Column(nullable: true)]
    private ?int $playersLeftToVote = null;

    public function __construct()
    {
        $this->votes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): self
    {
        $this->game = $game;

        return $this;
    }



    /**
     * @return Collection<int, Event>
     */
    public function getVotes(): ?Collection
    {
        return $this->votes;
    }

    public function addVote(Event $vote): self
    {
        if (!$this->votes->contains($vote)) {
            $this->votes->add($vote);
            $vote->setDay($this);
        }

        return $this;
    }

    public function removeVote(Event $vote): self
    {
        if ($this->votes->removeElement($vote)) {
            // set the owning side to null (unless already changed)
            if ($vote->getDay() === $this) {
                $vote->setDay(null);
            }
        }

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getAvailableHours(): array
    {
        return $this->availableHours;
    }

    public function setAvailableHours(?array $availableHours): self
    {
        $this->availableHours = $availableHours;

        return $this;
    }

    public function getPlayersLeftToVote(): ?int
    {
        return $this->playersLeftToVote;
    }

    public function setPlayersLeftToVote(?int $playersLeftToVote): self
    {
        $this->playersLeftToVote = $playersLeftToVote;

        return $this;
    }

    public function updateStatus() {
        $players= $this->game->getPlayers();
        $voteArray = array();

        // $checkArray = array();

        $this->playersLeftToVote = count($players);

        foreach ($players as $player) {
            $voteArray[$player->getId()] = array();
        }

        foreach ($this->votes as $event) {
            $voter = $event->getUser()->getId();
            if (!($event->isVote())) {
                $this->status="CANCELED";
            }
            if (isset($voteArray[$voter])) {
                if (count($voteArray[$voter]) == 0) {
                    $this->playersLeftToVote = $this->playersLeftToVote - 1;
                }
                array_push($voteArray[$voter], $event);
            }
        }

        usort($voteArray, function($a, $b){
            return count($a) > count($b);
        });

        if (!(isset($this->status)) && $this->playersLeftToVote > 0) {
            $this->status="VOTED";
        } elseif ($this->playersLeftToVote == 0) {
            $paths = array();
            
            foreach ($voteArray[0] as $voteNumber => $vote) {
                
                array_push( $paths, [$vote->getStartTime(), $vote->getFinishTime()]);

                for ($row=1 ; $row < count($voteArray) ; $row++) { 
                    foreach ($paths as $key => $path) {
                        $match = 0;
                        $tempPath = $path;
                        
                        foreach ($voteArray[$row] as $currentVote) {
                            $start = max($tempPath[0], $currentVote->getStartTime());
                            $finish = min($tempPath[1], $currentVote->getFinishTime());
                            
                            if ($start < $finish) {
                                $updatedPath = [$start, $finish];
                                
                                if ($match == 0) {
                                    $paths[$key] = $updatedPath;
                                } else {
                                    array_push($paths, $updatedPath);
                                }
                                $match++;
                            }
                        }

                        if ($match == 0) {
                            unset($paths[$key]);
                        }
                    }
                }
            }

            if (count($paths) > 0 ) {
                foreach ($paths as $key => $path) {
                    $startHour = intval($path[0]->format('h'));
                    $startMinutes = intval($path[0]->format('i'));
                    $finishtHour = intval($path[1]->format('h'));
                    $finishMinutes = intval($path[1]->format('i'));
                    
                    $length =($finishtHour*60 + $finishMinutes)- ($startHour*60 + $startMinutes);

                    // dd($finishtHour, $finishMinutes, $startHour, $startMinutes, $length);
                   if ($length < $this->game->getMinSessionLength() ) {
                    unset($paths[$key]);
                   } else {
                    $range = [$path[0],$path[1]];
                    array_push($this->availableHours, $range);
                   }
                }
                $this->status="GAMEDAY";
            } 
            
            if (count($paths) == 0) {
                $this->status="MISSED";
            }
        }

        // dd($this->playersLeftToVote, $voteArray,$paths,  $this->status);
        return $this;
    }
}
