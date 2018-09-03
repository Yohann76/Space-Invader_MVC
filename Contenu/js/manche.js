// ******************************************************
// ************ MANCHE SUIVANTE
// ******************************************************
function mancheSuivante() {
    manche = manche + 1;
    TirOk = TirOk + 2;

    for (var y = 0; y < 4; y++) // 0 6  // a baisser si la colision se fait toujour 
    {
        for (var x = 0; x < 9; x++)  // 0 9 
        {
            var enemigo = ennemis.create(x * 200, y * 100, 'enemigo'); // distance entre eux  // 130 et 110 // 200 et 100
            enemigo.anchor.setTo(0.5);
        }
    }
    ennemis.x = 50;   // 50 
    ennemis.y = 100;  // 60 
    game.physics.enable(ennemis, Phaser.Physics.ARCADE);

    // on annime le groupe 
    var annim = game.add.tween(ennemis).to({ x: 430 }, 5000,  // x= axe pour bouger 430 , 5000 = time ,  */ 
        Phaser.Easing.Linear.None, true, 0, 1000, true);
    annim.onRepeat.add(descender, this); // et pas onloop 
}


function textManche() {
    text = game.add.text(game.world.centerX, game.world.centerY, "manche " + manche);
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

function killAll() {
    ennemis.destroy();
    nave.kill();
    abri.kill();
    abri1.kill();
    abri2.kill();
    abri3.kill();
    abri4.kill();
}
function réinitialisation() {
    annim = null;
    score = 0;
    manche = 1;
    Vie = 1;
    resistanceAbri = 12;
    resistanceAbri1 = 12;
    resistanceAbri2 = 12;
    resistanceAbri3 = 12;
    resistanceAbri4 = 12;
}

function descender() {
    ennemis.y += 30;
}

