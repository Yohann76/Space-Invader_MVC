<?php $this->titre = "Inscription"; ?>

<h2> Veuillez vous inscrire </h2> 

<!-- pris sur vue select chap zone admin zoneajouterchap --> 

<div id="ContenerInscription">
        <form method="post" action="index.php?action=InscriptionEnvoie">
            <!-- Modifier le titre du chapitre -->  
            <p> Pseudo : </p> 
                <input type="text" name="InscriptionPseudo" id="inscription"    /> 
            <p> Mail :</p> 
                <input type="text" name="InscriptionMail" id="inscription"    /> 
            <p> Mots de passe </p> 
                <input type="password" name="InscriptionMDP" id="inscription"    /> 

                <br/>
                <br/>

                <input type="submit" value="Je veux m'inscrire !" class="bouton_inscription" />
    </form>

</div>