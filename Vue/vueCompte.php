<?php $this->titre = "Compte"; ?>

<!-- Page a propos transformer en mon profil --> 

<div id="blanc"> 
<h2>   Bonjour <?php  echo $_SESSION['loginMembre'] ;?> comment allez vous ? </h2> 
<p> Nous sommes ravis de vous revoir ! </p>  
</div> 

<h2> Votre tableau des scores </h2>

<h2> 
<table>
   <tr>
       <th>Score</th>
       <th>Nom</th>
       <th>Date</th>
   </tr>

<?php foreach ($ListeIdscores as $TopScoreId): ?> 
   <tr>
       <td><?php  echo $TopScoreId['scoremembres']; ?> </td>
       <td><?php  echo $TopScoreId['pseudo']; ?> </td>
       <td><?php  echo $TopScoreId['date_score']; ?></td>
   </tr>

 <?php endforeach; ?>

</table>

 </h2>

<a href="index.php?action=Deconnexion"  class="LienNav">Deconnexion</a>  
<hr/>

