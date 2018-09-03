// ******************************************************
// ************ colision  
// ******************************************************
function manageResist(abri, bala, resist) {
    bala.kill();
    resist--;

    switch (resist) {
        case 11:
            abri.loadTexture('abrilvl3');
            break;
        case 8:
            abri.loadTexture('abrilvl2');
            break;
        case 4:
            abri.loadTexture('abrilvl1');
            break;
        case 0:
            abri.kill();
            break;
    }
    return resist;
}


function colisionabri(abri, bala) {
    resistanceAbri = manageResist(abri, bala, resistanceAbri);
}
function colisionabri1(abri, bala) {
    resistanceAbri1 = manageResist(abri, bala, resistanceAbri1);
}
function colisionabri2(abri, bala) {
    resistanceAbri2 = manageResist(abri, bala, resistanceAbri2);
}
function colisionabri3(abri, bala) {
    resistanceAbri3 = manageResist(abri, bala, resistanceAbri3);
}

function colisionabri4(abri, bala) {
    resistanceAbri4 = manageResist(abri, bala, resistanceAbri4);
}

function colision(bala, enemigo) {
    bala.kill();
    enemigo.kill();
    score = score + 5;
    document.getElementById("score").innerHTML = " SCORE : " + score + "       LIFE : " + Vie;
    nbrMobs = nbrMobs - 1;
}

function pertedevie() {
    Vie = Vie - 1;
    ennemis.x = 50;
    ennemis.y = 100;
}