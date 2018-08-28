<?php
require 'Controleur/Routeur.php'; // a remplacer par un autoload  // a remettre pour que ca functionne 

session_start(); // Start session 

$routeur = new Routeur();
$routeur->routerRequete();

// https://github.com/Yohann76/Space-Invader_MVC  Github 

