
    var FondJeux          ; // le fond d'ecran de l'interface 
    var nave                ; // le joueur 
    var cursores            ; 
    var tir               ; // la balle 
    var tempsballe = 0      ; 
    var BoutonTir           ; // bouton pour tirer (espace )
    var ennemis             ; 
    var score = 0           ; // le score 
    var nbrMobs = 0         ; // le nombre de mobs restant sur l'interface 
    var abri                ; 
    var sound = false       ; 
    var looser = 0          ; 
    var looser1 = 1          ; 

    var resistanceAbri = 12 ; // 4 X 3 Tir = 4 images d'annimation ;  Normal, un peu desaillé, bcp dessailer, plus d'abri
    var resistanceAbri1 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;  
    var resistanceAbri2 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;
    var resistanceAbri3 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;
    var resistanceAbri4 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;

    var TirOk = 0           ; // pour ne pas tirer quand il n'y a pas de mobs 

    var Vie = 1  ;          // Si vie est a 0 on effectue game over   // 3 de base 
    var ViePerdue = 0 ; // Si vieperdue est au dessus de zero on retire une vie   // a remettre a 0 
    var GameOver = 0 ; // Si game over est au dessus de zero on affiche un msg et le jeux s'arréte 
    var manche = 1 ; 
    var GameB = false ; 


    var text = null; 
    
    var STATE_GAME_NONE      =0; 
    var STATE_GAME_LOADING   =1;
    var STATE_GAME_PLAYING   =2;
    var STATE_GAME_GAME_OVER =3; 
    var STATE_GAME_WIN       =4;
    
    var stateGame = STATE_GAME_NONE  ; 
GamePlayManager = {
// recap 
// remettre a zero anim 
// ******************************************************
// ************ INIT
// ******************************************************
    init: function() {
   //   game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true ; 
    game.scale.pageAlignVertically= true ;
    },
  
// ******************************************************
// ************ PRELOAD
// ******************************************************
    preload: function() {
        stateGame = STATE_GAME_LOADING  ; 
        game.load.image('background', 'Contenu/images/background.jpg') ; // XX x XX 
        game.load.image('shooter', 'Contenu/images/shooter1modif.png') ; // XX x XX  
        game.load.image('laser' , 'Contenu/images/tir.png')  ;
        game.load.image('enemigo', 'Contenu/images/mobs1modif.PNG') ; // XX x XX
        game.load.image('abri', 'Contenu/images/Abri1.PNG' , 65,65,2 ) ; // XX x XX  

        game.load.image('abrilvl3' ,   'Contenu/images/abri3.PNG') ; 
        game.load.image('abrilvl2' ,   'Contenu/images/abri2.PNG') ; 
        game.load.image('abrilvl1' ,   'Contenu/images/abri0.PNG') ; 
        // Button Play 
        game.load.spritesheet('buttonPlay', 'Contenu/images/buttonPlay.png' , 65,65,2 ) ; // XX x XX  
        // sound 
        game.load.audio('loopMusic','Contenu/sounds/sound2.mp3');  // song 
        //button sound 
        game.load.spritesheet('buttonSound', 'Contenu/images/buttonSoundonnoff.png' , 65,65,2 ) ; // XX x XX  
        game.load.image('buttonSoundcroix' ,  'Contenu/images/soundoff.png') ; 
        game.load.image('buttonSoundvoix' ,   'Contenu/images/soundon.png') ; 
        
    
    },    
   
// ******************************************************
// ************ CREATE
// ******************************************************
    create: function() {
      //  game.physics.startSystem(Phaser.Physics.ARCADE);
        FondJeux = game.add.sprite(0,0,'background') ; 
        // Sound 
        this.loopMusic = game.add.audio('loopMusic');	
        // Bouton pause music 
        this.buttonSound = game.add.button(20 , 580, 'buttonSound',this.Soundfunction,
        this, 1,0,1,0) ; 
        //Button Play
        this.buttonPlay = game.add.button(game.width/2 , game.height/2, 'buttonPlay',this.startGame,
        this, 1,0,1,0) ; 
        this.buttonPlay.anchor.setTo(0.5) ; // place le buttonplay au centre 
        this.buttonPlay.scale.setTo(2);  // Augmante la taille du bouton play 

        // NAVE 
        nave = game.add.sprite(game.width/2, 600,'shooter') ;
        nave.anchor.setTo(0.5) ; 
        nave.scale.setTo(0.1);  // rattrecie le shooter 0.3 pour le shooter normal 

        // detecter la colision A voir 
        nave.enableBody = true ;  
        nave.physicBodyType = Phaser.Physics.ARCADE ; 

        // test nave 
        game.physics.arcade.enable(nave);
       

        cursores = game.input.keyboard.createCursorKeys() ; 
        // ABRI */ 
        
        abri = game.add.sprite(130,450,'abri') ;  // 130 , 450  First abri 
        game.physics.arcade.enable(abri);
        abri.scale.setTo(1);  // rattrecie   
        abri.enableBody = true ;  // detecter la colision AV 
        abri.physicBodyType = Phaser.Physics.ARCADE ;     
     
        abri1 = game.add.sprite(330,450,'abri') ;  // 330 , 450        450 -20 
        game.physics.arcade.enable(abri1);
        abri1.scale.setTo(1);  // rattrecie   
        abri1.enableBody = true ;  // detecter la colision AV 
        abri1.physicBodyType = Phaser.Physics.ARCADE ;   

        abri2 = game.add.sprite(530,450,'abri') ;  // 530 , 450     // 400 pour le relever donc -50 
        game.physics.arcade.enable(abri2);
        abri2.scale.setTo(1);  // rattrecie   
        abri2.enableBody = true ;  // detecter la colision AV 
        abri2.physicBodyType = Phaser.Physics.ARCADE ;   

        abri3 = game.add.sprite(730,450,'abri') ;  // 730 , 450      450 - 25 
        game.physics.arcade.enable(abri3);
        abri3.scale.setTo(1);  // rattrecie   
        abri3.enableBody = true ;  // detecter la colision AV 
        abri3.physicBodyType = Phaser.Physics.ARCADE ;   

        abri4 = game.add.sprite(930,450,'abri') ;  // 930 , 450  
        game.physics.arcade.enable(abri4);
        abri4.scale.setTo(1);  // rattrecie   
        abri4.enableBody = true ;  // detecter la colision AV 
        abri4.physicBodyType = Phaser.Physics.ARCADE ;   

    /*
        abri = game.add.group() ;
        abri.scale.setTo(1);  // rattrecie   
        abri.enableBody = true ;  // detecter la colision AV 
        abri.physicBodyType = Phaser.Physics.ARCADE ;     
        abri.x = 130 ; 
        abri.y = 470 ;

        game.physics.enable(abri, Phaser.Physics.ARCADE);

        for(var y = 0 ; y < 1 ; y++)
        {
            for(var x = 0 ; x < 5 ; x++)
            {
               abri.create(x*200, y*110 , 'abri')  // distance entre eux 
            }
        }
     */
        // TIR 
        BoutonTir =  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR) ; 
        tir = game.add.group();
        tir.enableBody = true ;  // detecter la colision AV 
        tir.physicBodyType = Phaser.Physics.ARCADE ; 
        tir.createMultiple(20, 'laser')   ; 

        tir.setAll('anchor.x' , 0.5 ) ; 
        tir.setAll('anchor.y' , 1 ) ; 
        tir.setAll('outOfBoundsKill' , true ) ; 
        tir.setAll('checkWorldBounds', true) ; 
        // enemis 
        ennemis = game.add.group();
        ennemis.scale.setTo(0.4);  // rattrecie   
        ennemis.enableBody = true ;  // detecter la colision AV 
        // detecter le monstre sans la transparance 
        ennemis.physicBodyType = Phaser.Physics.ARCADE ; 
    }, // fin de créate 

    Soundfunction : function() {
        // au clic sur le bouton son on stop la musique
        if(sound  ) {
            this.loopMusic.pause();	  
            sound = false ;   
            this.buttonSound.loadTexture('buttonSoundcroix') ; 
        }
        else  {
            this.loopMusic.resume();  
            sound = true ;  
             this.buttonSound.loadTexture('buttonSoundvoix') ;  
        }
       
    },
    startGame: function() {
        console.log("StartGame Playing") ; 
     

        console.log("ca s'esecute quand méme") ;
        stateGame = STATE_GAME_PLAYING  ; 
        this.buttonPlay.visible = false ; 
        // Sound 
        this.loopMusic.loop = true;
        
        this.loopMusic.play();	
        sound = true ; 
        console.log(GameB) ; 

        if(GameB == true){
            this.loopMusic.resume();  
            this.buttonPlay.visible = false ;  // a voir pour plus voir le bouton 
            console.log( this.buttonPlay.visible) ; 
            nbrMobs = 0  ;  // fait apparaitre les mobs a la relance !I 
            console.log("on passe bien dans le if") ; 
        }
        else {    

        }
    },
// ******************************************************
// ************ UPDATE
// ******************************************************
    update: function() {
        
        switch(stateGame) {
            case STATE_GAME_NONE:
                console.log("none stategame") ;   // a tout indenter 

                break;
            case STATE_GAME_LOADING:

            console.log("loading stategame") ; 

                break; 
            case STATE_GAME_PLAYING:
            console.log(nbrMobs) ; 
            // a changer l'etat de jeux quand on perd ! 

            if(cursores.right.isDown)
            {
                nave.position.x += 10 ; 
            }
            else if (cursores.left.isDown)
            {
                nave.position.x -= 10 ; 
            }
   

            var bala ; 
            if(BoutonTir.isDown && TirOk >= 0 )      // Gestion du tir 
            {
                if(game.time.now > tempsballe )
                {
                   bala = tir.getFirstExists(false)  ; 
                }
                if(bala)
                {
                   bala.reset(nave.x , nave.y) ;
                   bala.body.velocity.y = -300 ;  // vitesse de la balle   // -300 
                   tempsballe = game.time.now + 100 ;  // temps entre les balles  // +100 

                }
            }

            // Colision entre enemis et la balle 
            game.physics.arcade.overlap(tir , ennemis , colision , null , this ) ;  // execution de la collision()

            // colision entre balle et abri 
            game.physics.arcade.overlap(tir , abri , colisionabri , null , this ) ;  
            game.physics.arcade.overlap(tir , abri1 , colisionabri1 , null , this ) ;  
            game.physics.arcade.overlap(tir , abri2 , colisionabri2 , null , this ) ;  
            game.physics.arcade.overlap(tir , abri3 , colisionabri3 , null , this ) ;  
            game.physics.arcade.overlap(tir , abri4 , colisionabri4 , null , this ) ;  

    // colision loose
            game.physics.arcade.overlap(ennemis , nave , loose1 , null , this ) ; 


            game.physics.arcade.overlap(ennemis , abri ,  loose2 , null , this ) ;  // marche nickel 
            game.physics.arcade.overlap(ennemis , abri1 , loose3 , null , this ) ;   
            game.physics.arcade.overlap(ennemis , abri2 , loose4 , null , this ) ;  
            game.physics.arcade.overlap(ennemis , abri3 , loose5 , null , this ) ;  
            game.physics.arcade.overlap(ennemis , abri4 , loose6 , null , this ) ;  


        //     game.physics.arcade.overlap(ennemis , abri1 , loose2 , null , this ) ; 
            // Faire apparaitre un nouveau groupe de mobs 
            if (nbrMobs === 0 )  
            {
                nbrMobs = +36 ;   // 54 ou 36 
            // console.log(nbrMobs) ; 
                TirOk = -2 ;  
            // Function de text 
            textManche() ;
            setTimeout(stopText,2500)      
            setTimeout(mancheSuivante, 3000) //On attend 3 secondes avant d'exécuter la fonction
            }  // Fin de la recreation de mobs 


            if (Vie <= 0 ) {

            stateGame = STATE_GAME_GAME_OVER  ; 
                // si vie est a 0 on passe a state game over 
            }  // fin de if Vie 

                break; 
            case STATE_GAME_GAME_OVER:
            /////////////////////////////////////////////////////////////////////////////////////////
            // Envoie de l'info
            // tuto pour passer une variable : https://api.jquery.com/jquery.get/
            ////////////////////////////////////////////////////////////////////////////////////////
            // index.php?action=getScore
            // url: "getScore.php",                 et aussi dans le $.get()
           $.ajax({             // action =  , ou dans data 
            url: "index.php",
            data: score,
            success: null
         //   dataType: String
          });
           $.get( "index.php?action=getScore", { score : score } );           
            
            ///////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////// 

            // on stope le son 
            this.loopMusic.pause();	  
            sound = false ;   
            // on joue un son de looser une sec aprés 
            console.log("game over stategame") ; 
            // on kill tout 
            KillAll() ; 

            réinitialisation() ; 
            console.log(score) ; 

            
            GameB = true ; // A garder important 

            GamePlayManager.preload() ; 
            GamePlayManager.create() ; 
            GamePlayManager.update();

                break; 
            case STATE_GAME_WIN:

                break;
        } // fin du switch 




    }, // fin de update  



} ;  // fin du gameplaymanager 

// ******************************************************
// ************ MANCHE SUIVANTE
// ******************************************************
function mancheSuivante ()  {    
    manche = manche + 1 ; 
    //  console.log("manche " + manche )
     TirOk = TirOk + 2  ; 

    for(var y = 0 ; y < 4 ; y++) // 0 6  // a baisser si la colision se fait toujour 
    {
        for(var x = 0 ; x < 9 ; x++)  // 0 9 
        {
            var enemigo = ennemis.create(x*200, y*100 , 'enemigo'); // distance entre eux  // 130 et 110 // 200 et 100
            enemigo.anchor.setTo(0.5) ; 
        }
    }


    ennemis.x = 50 ;   // 50 
    ennemis.y = 100 ;  // 60 
    game.physics.enable(ennemis, Phaser.Physics.ARCADE);

    // on annime le groupe 
    var annim = game.add.tween(ennemis).to({x:430} , 5000 ,  // x= axe pour bouger 430 , 5000 = time ,  */ 
    Phaser.Easing.Linear.None , true , 0, 1000, true ) ; 

    annim.onRepeat.add(descender,this) ; // et pas onloop 
   
     //   console.log(annim) ; 
}

function textManche() {
    text = game.add.text(game.world.centerX, game.world.centerY,"manche " + manche);
    //  Centers the text
    text.anchor.set(0.5);
    text.align = 'center';

    //  Our font + size
    text.font = 'Arial';
    text.fontWeight = 'bold';
    text.fontSize = 70;

    var grd = text.context.createLinearGradient(0, 0, 0, text.height);

    //  Add in 2 color stops
    grd.addColorStop(0, '#8ED6FF');   
    grd.addColorStop(1, '#004CB3');

    //  And apply to the Text
    text.fill = grd;
    
}
function stopText() {
    text.destroy();
}
// ******************************************************
// ************ colision  
// ******************************************************
function loose1(nave,enemigo) {
    console.log("colision nave enemis loose1 ") ; 
    pertedevie() ; 

    ennemis.x = 50 ;   // 50 
    ennemis.y = 100 ;  // 60  
}

/* --------------Colision ennemis abri------------ */ 

function pertedevie(){
    Vie = Vie -1 ; 
    console.log(Vie) ; 

    ennemis.x = 50 ;   // 50 
    ennemis.y = 100 ;  // 60  

}
function KillAll() {
        console.log("on kill tout") ; 
        // reste a kill 
           // annim ? inkillable 
       
        // kill bien       
        ennemis.destroy() ;    
        nave.kill() ;        

        abri.kill() ; 
        abri1.kill() ; 
        abri2.kill() ; 
        abri3.kill() ; 
        abri4.kill() ; 

}
   
function réinitialisation() {
    console.log("on remet tout pour jouer") ; 
    annim = null ; 
    score = 0 ; 
    manche = 1 ; 
    Vie = 1  ;  
    
    resistanceAbri = 12 ; 
    resistanceAbri1 = 12 ;  
    resistanceAbri2 = 12 ; 
    resistanceAbri3 = 12 ; 
    resistanceAbri4 = 12 ; 

    
}
function loose2(abri,enemigo) {   
    console.log("colision abri enemis loose2") ;
    pertedevie() ; 

    
}

function loose3(abri1,enemigo) {
    console.log("colision abri enemis loose3 ") ;
    pertedevie() ; 
   
     
}
function loose4(abri2,enemigo) {
    console.log("colision abri enemis loose4 ") ;
    pertedevie() ;
   
   
}
function loose5(abri3,enemigo) {
    console.log("colision abri enemis loose5 ") ;
    pertedevie() ;
    
   
}
function loose6(abri4,enemigo) {
    console.log("colision abri enemis loose6 ") ;
    pertedevie() ; 
   
   
}

/* -------------------------- */ 
function colisionabri(abri,bala) {
     bala.kill() ; 
    resistanceAbri = resistanceAbri-1 ;
    if(resistanceAbri == 0 )
    {
        bala.kill() ; 
        abri.kill() ; 
    }
    console.log(resistanceAbri) ; 

    if(resistanceAbri == 11 )
    {
        abri.loadTexture('abrilvl3') ;  
    }
    if(resistanceAbri == 8 )
    {
        abri.loadTexture('abrilvl2') ;  
    }
    if(resistanceAbri == 4 )
    {
        abri.loadTexture('abrilvl1') ;  
    }
   
}

function colisionabri1(abri,bala) {
    bala.kill() ; 
   resistanceAbri1 = resistanceAbri1-1 ;
   if(resistanceAbri1 == 0 )
   {
       bala.kill() ; 
       abri.kill() ; 
   }
   console.log(resistanceAbri1) ; 

   if(resistanceAbri1 == 11 )
   {
       abri1.loadTexture('abrilvl3') ;  
   }
   if(resistanceAbri1 == 8 )
   {
       abri1.loadTexture('abrilvl2') ;  
   }
   if(resistanceAbri1 == 4 )
   {
       abri1.loadTexture('abrilvl1') ;  
   }
}

function colisionabri2(abri,bala) {
    bala.kill() ; 
   resistanceAbri2 = resistanceAbri2-1 ;
   if(resistanceAbri2 == 0 )
   {
       bala.kill() ; 
       abri.kill() ; 
   }
   console.log(resistanceAbri2) ; 

   if(resistanceAbri2 == 11 )
   {
       abri2.loadTexture('abrilvl3') ;  
   }
   if(resistanceAbri2 == 8 )
   {
       abri2.loadTexture('abrilvl2') ;  
   }
   if(resistanceAbri2 == 4 )
   {
       abri2.loadTexture('abrilvl1') ;  
   }
}

function colisionabri3(abri,bala) {
    bala.kill() ; 
   resistanceAbri3 = resistanceAbri3-1 ;
   if(resistanceAbri3 == 0 )
   {
       bala.kill() ; 
       abri.kill() ; 
   }
   console.log(resistanceAbri3) ; 

   if(resistanceAbri3 == 11 )
   {
       abri3.loadTexture('abrilvl3') ;  
   }
   if(resistanceAbri3 == 8 )
   {
       abri3.loadTexture('abrilvl2') ;  
   }
   if(resistanceAbri3 == 4 )
   {
       abri3.loadTexture('abrilvl1') ;  
   }
}

function colisionabri4(abri,bala) {
    bala.kill() ; 
   resistanceAbri4 = resistanceAbri4-1 ;
   if(resistanceAbri4 == 0 )
   {
       bala.kill() ; 
       abri.kill() ; 
   }
   console.log(resistanceAbri4) ; 

   if(resistanceAbri4 == 11 )
   {
       abri4.loadTexture('abrilvl3') ;  
   }
   if(resistanceAbri4 == 8 )
   {
       abri4.loadTexture('abrilvl2') ;  
   }
   if(resistanceAbri4 == 4 )
   {
       abri4.loadTexture('abrilvl1') ;  
   }
}




function colision(bala , enemigo) {
    bala.kill() ; 
    enemigo.kill() ; 

    score = score+5  ; 

    document.getElementById("score").innerHTML = " SCORE : " + score  + "       LIFE : " + Vie   ; 

    nbrMobs = nbrMobs-1 ;
}

// ******************************************************
// ************ DESCENDER 
// ******************************************************
function descender() {
        ennemis.y +=30; 

}




// positionement de l'interface dans la div id="interface"  A voir uniquement dans cette div 
var game = new Phaser.Game (1136 , 640, Phaser.AUTO,'interface') ; 

game.state.add('gameplay' , GamePlayManager) ; 

game.state.start('gameplay') ; 

