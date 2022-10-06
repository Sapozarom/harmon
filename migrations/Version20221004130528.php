<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221004130528 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE inactive_table (game_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_CE4242FE48FD905 (game_id), INDEX IDX_CE4242FA76ED395 (user_id), PRIMARY KEY(game_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE inactive_table ADD CONSTRAINT FK_CE4242FE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE inactive_table ADD CONSTRAINT FK_CE4242FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE inactive_table DROP FOREIGN KEY FK_CE4242FE48FD905');
        $this->addSql('ALTER TABLE inactive_table DROP FOREIGN KEY FK_CE4242FA76ED395');
        $this->addSql('DROP TABLE inactive_table');
    }
}
