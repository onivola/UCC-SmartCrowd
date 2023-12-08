<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        return $this->render('index.html.twig',['controller_name' => 'test',]);
    }
    #[Route('/compte', name: 'app_compte')]
    public function compte(): Response
    {
        return $this->render('compte.html.twig',['controller_name' => 'test',]);
    }
    #[Route('/FormUser', name: 'Form_User')]
    public function FormUser(EntityManagerInterface $entityManager, Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class,$user);
        //$User est l'image du formulaire
        //$form->isSubmitted();
        //dd($user);
        $form->handleRequest($request); //le formulaire traite la requete
        if($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);

            // actually executes the queries (i.e. the INSERT query)
            $entityManager->flush();

            $this->addFlash(
                'success',
                $user->getUsername()." a ete ajouter"
            );
            //dd($user);
            return $this->redirectToRoute(route:'Form_User');
        } else {
            //ECHO 321;
            return $this->render('Form.html.twig',[
                'form' => $form->createView()
            ]);
        }
      
    }
}
