<?php

require_once 'Modele/Modele.php';

class admin extends Modele {
     
    public function ajouterMembre($PseudoMembre,$MailMembre,$MDPMembre,$MDPMembrehash) {
        $sql = 'insert into membres(date_inscription,nom_utilisateur,adresse_email,mot_de_passe,hash_validation)' 
            . ' values(?, ?, ?,?,?)';
        $date = date("Y-m-d H:i:s");    // récupére la date courante 
        $this->executerRequete($sql, array($date,$PseudoMembre,$MailMembre,$MDPMembre,$MDPMembrehash));
    }

    // Requette de connexion a la base 
    public function ConnexionMembreReq($PseudoConnexionMembre) {  // == a $verifpseudo 
        $sql = 'SELECT * FROM membres WHERE nom_utilisateur = :pseudo'  ; // La plus probable && :mdp 
 
        $TabPseudoMembre = $this->executerRequete($sql, array('pseudo'=>$PseudoConnexionMembre)); // tableau assiociatif
        $user = $TabPseudoMembre->fetch() ;  // transorme pdo 
        $user['nom_utilisateur'] ;   
        
        return $user['nom_utilisateur'] ;
    }

    public function  ConnexionMembreReqMDP($MDPConnexionMembre) {  // == a $verifMDP
        // on cherche si le cryptage de mdpconnexion membre et présent dans hash_validation 
        $sql = 'SELECT * FROM membres WHERE mot_de_passe = :MDPhash'  ;
        // $sql = 'SELECT * FROM membres WHERE hash_validation AND mot_de_passe = :MDPhash'  ;  

        $TabMdpMembre = $this->executerRequete($sql, array('MDPhash'=>$MDPConnexionMembre)); // tableau assiociatif
        $userMDP = $TabMdpMembre->fetch() ;  // transorme pdo 
        $userMDP['mot_de_passe'] ;  
        return $userMDP['mot_de_passe'] ;  
    }

    // Recupération des 5 meilleurs scores pour la page score 
    public function Recup5meilleursscores() {
        /* order by pour trier la colonne */ 
         $sql = 'SELECT * FROM scoremembre WHERE scoremembres ORDER BY scoremembres DESC'  ;  

        $ListeMeilleursScore = $this->executerRequete($sql,array());
       return $ListeMeilleursScore->fetchAll();
    }

    // Recupération des score selon l'id    avec   $idMembre
    public function RecupScoreId($idMembre) {
        /* order by pour trier la colonne */ 
        $sql = 'SELECT * FROM scoremembre WHERE scoremembres AND id = :membreidconnecter       ORDER BY scoremembres DESC'  ;  
        $ListeIdScore = $this->executerRequete($sql,array('membreidconnecter'=>$idMembre));
        return $ListeIdScore->fetchAll();
    }

    public function TestMembre($Pseudosql) {
        $sql = ' SELECT * FROM membres WHERE nom_utilisateur =  :pseudoMembre '  ;  
        $PseudoMembre = $this->executerRequete($sql,array('pseudoMembre'=>$Pseudosql));
        return $PseudoMembre->fetch();
    }

    public function SendScoreDatabase($idGame,$getScore,$Pseudosql,$date_enregistrement) {
        $sql = 'insert into scoremembre(id,scoremembres,pseudo,date_score)' 
            . ' values(?,?,?,?)';
        $this->executerRequete($sql, array($idGame,$getScore,$Pseudosql,$date_enregistrement));
    }

} // Fin de class admin 
