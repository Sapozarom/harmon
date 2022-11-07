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
    private Collection $votes;

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
    public function getVotes(): Collection
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
}
