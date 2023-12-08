<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[UniqueEntity(
    fields: ['username'],
    message: 'This username is already registered.',
)] //is unique
#[UniqueEntity(
    fields: ['email'],
    message: 'This email is already registered.',
)] //is unique
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    
    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message:"Username field cannot be left blank.")]
    #[Assert\Length(
        min: 4,
        max: 50,
        minMessage: 'Username should be between 4 and 50 characters long.',
        maxMessage: 'Username should be between 4 and 50 characters long.',
    )]
    private ?string $username = null;

    #[ORM\Column(length: 255,unique: true)]
    #[Assert\NotBlank(message:"Email field cannot be left blank.")]
    #[Assert\Email(message: 'The email is not a valid.')]
    //#[Assert\Unique(message: 'The email address you entered is already registered.')]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message:"Password field cannot be left blank.")]
    #[Assert\Length(
        min: 4,
        max: 50,
        minMessage: 'Password must be at least 4 characters long.',
        maxMessage: 'Username should be between 4 and 50 characters long.',
    )]
    private ?string $password = null;

    #[ORM\Column(length: 255,unique: true)]
    #[Assert\NotBlank(message:"Perfect Money address field cannot be left blank.")]
    //#[Assert\Unique(message: 'The Perfect Money address you entered is already associated with another account.')]
    #[Assert\Regex(pattern:'/^U\d+$/',message:"Please enter a valid Perfect Money address.")]
    private ?string $PMAdress = null;

    #[ORM\Column(type: 'json')]
    private array $roles = [];
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getPMAdress(): ?string
    {
        return $this->PMAdress;
    }

    public function setPMAdress(string $PMAdress): self
    {
        $this->PMAdress = $PMAdress;

        return $this;
    }
    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }
    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
    /**
     * The public representation of the user (e.g. a username, an email address, etc.)
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

}
