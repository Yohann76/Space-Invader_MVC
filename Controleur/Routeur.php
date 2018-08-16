<?php

require_once 'Controleur/ControleurAccueil.php';
//require_once 'Controleur/ControleurChapitre.php';
//require_once 'Controleur/ControleurAdmin.php';

require_once 'Vue/Vue.php';
class Routeur {

    private $ctrlAccueil;
    private $ctrlChapitre;
    private $ctrlAdmin;

    public function __construct() {
        $this->ctrlAccueil  = new ControleurAccueil( );
    }

    // Route une requête entrante : exécution l'action associée
    public function routerRequete() {
            try {
                if (isset($_GET['action'])) {


                    if ($_GET['action'] == 'getScore') {  
                        $this->ctrlAccueil->getScore();        
                    }
                    // pour la connection 
                    if ($_GET['action'] == 'Connexion') {  
                        $this->ctrlAccueil->Connexion();        
                    }

                    if ($_GET['action'] == 'ConnexionMembre') {  
                        $this->ctrlAccueil->TestConnexionMembre();        
                    }

                    if ($_GET['action'] == 'Inscription') {  // Affiche la vue Inscription
                        $this->ctrlAccueil->Inscription(); 
                    }

                    if ($_GET['action'] == 'InscriptionEnvoie') {  // Au bouton on envoie le form d'inscription BDD 
                    $this->ctrlAccueil->EnvoieInscriptionMembre() ;
                    }


                    if ($_GET['action'] == 'Scores') {  // Affiche la vue Score 
                        $this->ctrlAccueil->Scores(); 
                    }

                    if ($_GET['action'] == 'Compte') {  // Affiche la vue Compte
                        $this->ctrlAccueil->Compte(); 
                    }

                    // On se deconecte avec l'action Deconnexion 
                    if ($_GET['action'] == 'Deconnexion') {  
                        $this->ctrlAccueil->DeconnexionAdmin(); 
                    }
                } // Fin du grand grand if 
                
                
                
                else {  // aucune action définie : affichage de l'accueil
                    $this->ctrlAccueil->accueil();
                }
    
            }  


        catch (Exception $e) { // Sinon on affiche l'erreur 
            $this->erreur($e->getMessage());
        }
    } // fin de router requette 

    // Affiche une erreur
    private function erreur($msgErreur) { // pour afficher la vueErreur 
        $vue = new Vue("Erreur");
        $vue->generer(array('msgErreur' => $msgErreur));
    }

    // Recherche un paramètre dans un tableau
    private function getParametre($tableau, $nom) {
        if (isset($tableau[$nom])) {
            return $tableau[$nom];
        }
        else
            throw new Exception("Paramètre '$nom' absent");
    }

}

  