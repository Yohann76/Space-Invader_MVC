<?php
require 'Controleur/Routeur.php';
session_start(); // Start session 

$routeur = new Routeur();
$routeur->routerRequete();

// https://github.com/Yohann76/Space-Invader_MVC  Github 

