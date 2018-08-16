
<!-- debut doctype html --> 
<!doctype html>
<html lang="fr">
<head>
        <META charset="utf-8" />
        <link rel="icon" href="favicon.ico" />  
        <title><?= $titre ?></title>
        
		
        <!-- Script --> 
        <script src="Contenu/js/jquery-3.2.1.js"> </script>       <!-- Bibliotheque JavaScript Jquery   --> 
                                                                  


        <!-- Cascading Style Sheets -->
        <link rel="stylesheet" href="Contenu/css/style.css" /> 
        <link rel="stylesheet" href="Contenu/css/style.min.1024.css" /> <!-- Max-Width 1024 --> 
		
        
		<META NAME="keywords" CONTENT="SpaceInvader,Jeux,Game" />
        <META name="description" content="Space Invaders des temps moderne , remis au gout du jour, Space invaders vous offrent une expérience de jeux 
        incomparable !" />
										
        <!-- Viewport pour enlever le dezoom sur mobile -->   
        <META name="viewport" content="width=device-width,initial-scale=1.0,shrink-to_fit=no" />          
        <!-- FONT AWESOME -->
        <link rel="stylesheet" href="Contenu/font-awesome/css/font-awesome.min.css" />
        
        <!-- POLICE --> 
        <link href='http://fonts.googleapis.com/css?family=Lobster+Two&v1' rel='stylesheet' type='text/css'> <!-- A voir Police --> 
 </head>
    
 <!-- <i class="fa fa-line-chart" aria-hidden="true"></i> -->  

<body>

    <!-- HEADER --> 
    <nav>
        <ul>
            <li><a href="index.php">Jeux</a></li>
            <li><a href=index.php?action=Connexion>   Connexion </a></li> 
            <li><a href=index.php?action=Inscription> Inscription </a></li> 
            <li><a href=index.php?action=Scores>      Scores </a></li> 
            <li><a href=index.php?action=Compte>    Compte  </a></li> 
        </ul>
    </nav> 

	<header>	
    <!--
    <img class="center" src="Contenu/images/titrespace.jpg">
    -->
    <h1> Space Invaders </h1> 
    </header>
    


	<!-- Contenu --> 
         <?= $contenu ?> <!-- #contenu -->  
      

	<!-- Fin contenu --> 
    
    
    <footer>	
        <p> Jeux exclusif PC <br/>
        Pour sauvgarder votre score, vous devez vous connecté </p> 

        <h2> @YohannDurand OpenClassroom </h2> 

     </footer>



   


    </body>
</html>