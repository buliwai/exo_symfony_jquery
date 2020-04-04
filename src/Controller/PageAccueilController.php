<?php

namespace App\Controller;

use App\Repository\ClubRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;



class PageAccueilController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home (ClubRepository $clubRepository)
    {
        return $this->render( 'base.html.twig');
    }





}