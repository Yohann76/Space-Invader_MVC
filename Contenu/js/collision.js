// ******************************************************
// ************ colision  
// ******************************************************

function colisionabri(abri,bala) { 
    bala.kill() ; 
    resistanceAbri = resistanceAbri-1 ;
    if(resistanceAbri == 0 ){  bala.kill() ; abri.kill() ; } 
    if(resistanceAbri == 11 ){ abri.loadTexture('abrilvl3') ;  }
    if(resistanceAbri == 8 ){ abri.loadTexture('abrilvl2') ;  }
    if(resistanceAbri == 4 ){abri.loadTexture('abrilvl1') ;  }   
}
function colisionabri1(abri,bala) {
   bala.kill() ; 
   resistanceAbri1 = resistanceAbri1-1 ;
   if(resistanceAbri1 == 0 ) { bala.kill() ; abri.kill() ; }
   if(resistanceAbri1 == 11 ){ abri1.loadTexture('abrilvl3') ;  }
   if(resistanceAbri1 == 8 ){abri1.loadTexture('abrilvl2') ;  }
   if(resistanceAbri1 == 4 ) { abri1.loadTexture('abrilvl1') ;  }  
}
function colisionabri2(abri,bala) {
   bala.kill() ; 
   resistanceAbri2 = resistanceAbri2-1 ;
   if(resistanceAbri2 == 0 ){bala.kill() ; abri.kill() ;  }
   if(resistanceAbri2 == 11 ) {abri2.loadTexture('abrilvl3') ;  }
   if(resistanceAbri2 == 8 ){ abri2.loadTexture('abrilvl2') ; } 
   if(resistanceAbri2 == 4 ) { abri2.loadTexture('abrilvl1') ; }   
}
function colisionabri3(abri,bala) {
   bala.kill() ; 
   resistanceAbri3 = resistanceAbri3-1 ;
   if(resistanceAbri3 == 0 ) {bala.kill() ; abri.kill() ;  } 
   if(resistanceAbri3 == 11 ) {abri3.loadTexture('abrilvl3') ;  } 
   if(resistanceAbri3 == 8 ){  abri3.loadTexture('abrilvl2') ; } 
   if(resistanceAbri3 == 4 )  { abri3.loadTexture('abrilvl1') ; } 
}
function colisionabri4(abri,bala) {
   bala.kill() ; 
   resistanceAbri4 = resistanceAbri4-1 ;
   if(resistanceAbri4 == 0 ){bala.kill() ; abri.kill() ; }
   if(resistanceAbri4 == 11 ) { abri4.loadTexture('abrilvl3') ; } 
   if(resistanceAbri4 == 8 ) {  abri4.loadTexture('abrilvl2') ; }
   if(resistanceAbri4 == 4 ) { abri4.loadTexture('abrilvl1') ;  } 
}


function colision(bala , enemigo) {
    bala.kill() ; 
    enemigo.kill() ; 
    score = score+5  ; 
    document.getElementById("score").innerHTML = " SCORE : " + score  + "       LIFE : " + Vie   ; 
    nbrMobs = nbrMobs-1 ;
}

function loose1(nave,enemigo) { 
    pertedevie() ; 
    ennemis.x = 50 ;   
    ennemis.y = 100 ;  
}

function loose2(abri,enemigo)  { pertedevie() ; } 
function loose3(abri1,enemigo) { pertedevie() ; }
function loose4(abri2,enemigo) { pertedevie() ; }
function loose5(abri3,enemigo) { pertedevie() ; }
function loose6(abri4,enemigo) { pertedevie() ; }

function pertedevie(){
    Vie = Vie -1 ; 
    ennemis.x = 50 ;   
    ennemis.y = 100 ;    
}