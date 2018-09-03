
var FondJeux;
var nave;
var cursores;
var tir;
var tempsballe = 0;
var BoutonTir;
var ennemis;
var score = 0;
var nbrMobs = 0;
var abri;
var sound = false;
var looser = 0;
var looser1 = 1;

var TabAbri;
var resistanceAbri = 12;
var resistanceAbri1 = 12;
var resistanceAbri2 = 12;
var resistanceAbri3 = 12;
var resistanceAbri4 = 12;

var TirOk = 0;

var Vie = 1;
var ViePerdue = 0;
var GameOver = 0;
var manche = 1;
var GameB = false;

var text = null;
var vitesseballe = -300;

var STATE_GAME_NONE = 0;
var STATE_GAME_LOADING = 1;
var STATE_GAME_PLAYING = 2;
var STATE_GAME_GAME_OVER = 3;
var STATE_GAME_WIN = 4;

var stateGame = STATE_GAME_NONE;
GamePlayManager = {
    // ******************************************************
    // ************ INIT
    // ******************************************************
    init: function () {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    // ******************************************************
    // ************ PRELOAD
    // ******************************************************
    preload: function () {
        stateGame = STATE_GAME_LOADING;
        game.load.image('background', 'Contenu/images/background.jpg');
        game.load.image('shooter', 'Contenu/images/shooter1modif.png');
        game.load.image('laser', 'Contenu/images/tir.png');
        game.load.image('enemigo', 'Contenu/images/mobs1modif.PNG');
        game.load.image('abri', 'Contenu/images/Abri1.PNG', 65, 65, 2);

        game.load.image('abrilvl3', 'Contenu/images/abri3.PNG');
        game.load.image('abrilvl2', 'Contenu/images/abri2.PNG');
        game.load.image('abrilvl1', 'Contenu/images/abri0.PNG');
        // Button Play 
        game.load.spritesheet('buttonPlay', 'Contenu/images/buttonPlay.png', 65, 65, 2);
        // sound 
        game.load.audio('loopMusic', 'Contenu/sounds/sound2.mp3');
        //button sound 
        game.load.spritesheet('buttonSound', 'Contenu/images/buttonSoundonnoff.png', 65, 65, 2);
        game.load.image('buttonSoundcroix', 'Contenu/images/soundoff.png');
        game.load.image('buttonSoundvoix', 'Contenu/images/soundon.png');
    },

    // ******************************************************
    // ************ CREATE
    // ******************************************************
    create: function () {
        this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'background');
        // Sound 
        this.loopMusic = game.add.audio('loopMusic');
        // Bouton pause music 
        this.buttonSound = game.add.button(20, 580, 'buttonSound', this.Soundfunction,
            this, 1, 0, 1, 0);
        //Button Play
        this.buttonPlay = game.add.button(game.width / 2, game.height / 2, 'buttonPlay', this.startGame,
            this, 1, 0, 1, 0);
        this.buttonPlay.anchor.setTo(0.5);
        this.buttonPlay.scale.setTo(2);

        // NAVE 
        nave = game.add.sprite(game.width / 2, 600, 'shooter');
        nave.anchor.setTo(0.5);
        nave.scale.setTo(0.1);

        // detecter la colision A voir 
        nave.enableBody = true;
        nave.physicBodyType = Phaser.Physics.ARCADE;
        // test nave 
        game.physics.arcade.enable(nave);
        cursores = game.input.keyboard.createCursorKeys();

        // ABRI 
        abri = game.add.sprite(130, 450, 'abri');
        game.physics.arcade.enable(abri);
        abri.scale.setTo(1);
        abri.enableBody = true;
        abri.physicBodyType = Phaser.Physics.ARCADE;

        abri1 = game.add.sprite(330, 450, 'abri');  // 330 , 450      
        game.physics.arcade.enable(abri1);
        abri1.scale.setTo(1);
        abri1.enableBody = true;
        abri1.physicBodyType = Phaser.Physics.ARCADE;

        abri2 = game.add.sprite(530, 450, 'abri');  // 530 , 450     
        game.physics.arcade.enable(abri2);
        abri2.scale.setTo(1);
        abri2.enableBody = true;
        abri2.physicBodyType = Phaser.Physics.ARCADE;

        abri3 = game.add.sprite(730, 450, 'abri');  // 730 , 450      
        game.physics.arcade.enable(abri3);
        abri3.scale.setTo(1);
        abri3.enableBody = true;
        abri3.physicBodyType = Phaser.Physics.ARCADE;

        abri4 = game.add.sprite(930, 450, 'abri');  // 930 , 450  
        game.physics.arcade.enable(abri4);
        abri4.scale.setTo(1);
        abri4.enableBody = true;
        abri4.physicBodyType = Phaser.Physics.ARCADE;


        TabAbri = [abri, abri1, abri2, abri3, abri4];
        var TabResistanceAbri = [resistanceAbri, resistanceAbri1, resistanceAbri2, resistanceAbri3, resistanceAbri4];

        // TIR 
        BoutonTir = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        tir = game.add.group();
        tir.enableBody = true;
        tir.physicBodyType = Phaser.Physics.ARCADE;
        tir.createMultiple(20, 'laser');
        tir.setAll('anchor.x', 0.5);
        tir.setAll('anchor.y', 1);
        tir.setAll('outOfBoundsKill', true);
        tir.setAll('checkWorldBounds', true);
        // enemis 
        ennemis = game.add.group();
        ennemis.scale.setTo(0.4);
        ennemis.enableBody = true;
        // detecter le monstre sans la transparance 
        ennemis.physicBodyType = Phaser.Physics.ARCADE;
    },
    Soundfunction: function () {
        // au clic sur le bouton son on stop la musique
        if (sound) {
            this.loopMusic.pause();
            sound = false;
            this.buttonSound.loadTexture('buttonSoundcroix');
        }
        else {
            this.loopMusic.resume();
            sound = true;
            this.buttonSound.loadTexture('buttonSoundvoix');
        }
    },
    startGame: function () {
        stateGame = STATE_GAME_PLAYING;
        this.buttonPlay.visible = false;
        // Sound 
        this.loopMusic.loop = true;

        this.loopMusic.play();
        sound = true;

        if (GameB == true) {
            this.loopMusic.resume();
            this.buttonPlay.visible = false;
            console.log(this.buttonPlay.visible);
            nbrMobs = 0;
        }
        else {
        }
    },
    // ******************************************************
    // ************ UPDATE
    // ******************************************************
    update: function () {
        switch (stateGame) {
            case STATE_GAME_NONE:
                break;
            case STATE_GAME_LOADING:
                break;
            case STATE_GAME_PLAYING:

                if (cursores.right.isDown) {
                    nave.position.x += 10;
                }
                else if (cursores.left.isDown) {
                    nave.position.x -= 10;
                }
                // Gestion du tir 
                var bala;
                if (BoutonTir.isDown && TirOk >= 0) {
                    if (game.time.now > tempsballe) {
                        bala = tir.getFirstExists(false);
                    }
                    if (bala) {
                        bala.reset(nave.x, nave.y);
                        bala.body.velocity.y = vitesseballe;  // vitesse de la balle  -300 
                        tempsballe = game.time.now + 100;
                    }
                }
                // on annime le fond 
                this.background.autoScroll(-25, -50);
                // Colision entre enemis et la balle 
                game.physics.arcade.overlap(tir, ennemis, colision, null, this);  // execution de la collision()
                // colision entre balle et abri 

                game.physics.arcade.overlap(tir, abri, colisionabri, null, this);
                game.physics.arcade.overlap(tir, abri1, colisionabri1, null, this);
                game.physics.arcade.overlap(tir, abri2, colisionabri2, null, this);
                game.physics.arcade.overlap(tir, abri3, colisionabri3, null, this);
                game.physics.arcade.overlap(tir, abri4, colisionabri4, null, this);


                game.physics.arcade.overlap(ennemis, nave, pertedevie, null, this);

                TabAbri.forEach(function (element) {
                    game.physics.arcade.overlap(ennemis, element, pertedevie, null, this);
                });


                // new groups mobs
                if (nbrMobs === 0) {
                    nbrMobs = +36;
                    TirOk = -2;
                    // Function de text 
                    textManche();
                    setTimeout(stopText, 2500)
                    setTimeout(mancheSuivante, 3000)
                }  // Fin de la recreation de mobs 
                if (Vie <= 0) {
                    stateGame = STATE_GAME_GAME_OVER;
                }
                break;
            case STATE_GAME_GAME_OVER:
                $.ajax({
                    url: "index.php",
                    data: score,
                    success: null
                });
                $.get("index.php?action=getScore", { score: score });
                // on stope le son 
                this.loopMusic.pause();
                sound = false;
                // on kill tout 
                killAll();
                réinitialisation();
                GameB = true;
                GamePlayManager.preload();
                GamePlayManager.create();
                GamePlayManager.update();
                break;
            case STATE_GAME_WIN:
                break;
        } // fin du switch 
    }, // fin de update  
};  // fin du gameplaymanager 

// positionement de l'interface dans la div id="interface"  A voir uniquement dans cette div 
var game = new Phaser.Game(1136, 640, Phaser.AUTO, 'interface');
game.state.add('gameplay', GamePlayManager);
game.state.start('gameplay');

