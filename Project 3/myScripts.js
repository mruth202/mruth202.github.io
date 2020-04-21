
function onloadFunc() {
  setNumbers(false);
  setTimeout( function() {setDivision('nfl'),500; document.documentElement.scrollTop = 0 } );
}

var standingsElement = document.getElementById("standingsId");
function setNumbers(b) { 
  if (b) {
    standingsElement.style.backgroundImage = "url('images/standings.png')";
  } else {
    standingsElement.style.backgroundImage = "url('images/blank.png')";
  }
}


var box1,box2,box3,box4;

function setDivision(division) {
  resetAllAnimations();
  resetBoxPositions.reset();
  resetBoxPositions.play();
  box1 = document.getElementById("box1");
  box2 = document.getElementById("box2");
  box3 = document.getElementById("box3");
  box4 = document.getElementById("box4");

  if (division === "nfcNorth") {
    box1.style.backgroundImage = "url('images/bears100.png')";
    box2.style.backgroundImage = "url('images/vikings100.png')";
    box3.style.backgroundImage = "url('images/packers100.png')";
    box4.style.backgroundImage = "url('images/lions100.png')"; 
  }   else if (division === "nfcEast") {
    box1.style.backgroundImage = "url('images/cowboys100.png')";
    box2.style.backgroundImage = "url('images/eagles100.png')";
    box3.style.backgroundImage = "url('images/redskins100.png')";
    box4.style.backgroundImage = "url('images/giants100.png')"; 
  }   else if (division === "nfcSouth") {
    box1.style.backgroundImage = "url('images/saints100.png')";
    box2.style.backgroundImage = "url('images/falcons100.png')";
    box3.style.backgroundImage = "url('images/buccs100.png')";
    box4.style.backgroundImage = "url('images/panthers100.png')"; 
  }   else if (division === "nfcWest") {
    box1.style.backgroundImage = "url('images/49ers100.png')";
    box2.style.backgroundImage = "url('images/seahawks100.png')";
    box3.style.backgroundImage = "url('images/rams100.png')";
    box4.style.backgroundImage = "url('images/cardinals100.png')"; 
  }   else if (division === "nfl") {
    box1.style.backgroundImage = "url('images/blank.png')";
    box2.style.backgroundImage = "url('images/blank.png')";
    box3.style.backgroundImage = "url('images/blank.png')";
    box4.style.backgroundImage = "url('images/blank.png')"; 
  }
}

function resetAllAnimations() {
  nfcNorthAnim1.reset();
  nfcEastAnim1.reset();
  nfcSouthAnim1.reset();
  nfcWestAnim1.reset();
}


var resetBoxPositions = anime({
  targets: 'div.box',
  opacity: [ 
    { value: 0.0, duration: 0, delay: 0 },
    { value: 1.0, duration: 0, delay: 0 },
  ],
  translateY: [
    { value: function(el, i, li) {
        curY = Math.round(el.getBoundingClientRect().y);
        return 125*i - curY + 100;
      }, duration: 0, delay: 0 },
  ],
  autoplay: false,
  loop: false
});

var scrollSection = 0;
// 0 - Intro section .. no images
// 1 - nfcNorth ..

var scrollPos = 0;
window.onscroll = function() {scrollFunc()};

function scrollFunc() {
  var sp = 750;
  scrollPos = document.documentElement.scrollTop;

  var elt = document.getElementById("scrollId");
  elt.innerHTML = "" + Math.round(scrollPos);
 //elt.innerHTML = "";
//alert(elt);
  //document.body.scrollTop;
  //document.documentElement.scrollTop;
  if ( scrollSection != 0 && (scrollPos < sp * 1) ) {
    scrollSection = 0;
    setDivision('nfl');
    setNumbers(false);
  } else if ( scrollSection != 1 && 
             scrollPos >= sp * 1 && scrollPos < sp * 2) {
    scrollSection = 1;
    setDivision('nfcNorth');
    setNumbers(true);
  } else if ( scrollSection != 2 && 
             scrollPos >= sp * 2 && scrollPos < sp * 3) {
    scrollSection = 2;
    //alert("entered scrollSection 2");
    setDivision('nfcNorth');
    setNumbers(true);
    setTimeout( function() {nfcNorthAnim1.play(),500;} );
    //setTimeout( function() {nfcNorthAnim2(),500;} );
    
  }  else if ( scrollSection != 3 && 
             scrollPos >= sp * 3 && scrollPos < sp * 4) {
    scrollSection = 3;
    setDivision('nfcEast');
    setNumbers(true);
  } 
  else if ( scrollSection != 4 && 
    scrollPos >= sp * 4 && scrollPos < sp * 5) {
scrollSection = 4;
setDivision('nfcEast');
setNumbers(true);
setTimeout( function() {nfcEastAnim1.play(),500;} );
} 

   else if ( scrollSection != 5 && 
  scrollPos >= sp * 5 && scrollPos < sp * 6) {
scrollSection = 5;
setDivision('nfcSouth');
setNumbers(true);
} 
   else if ( scrollSection != 6 && 
scrollPos >= sp * 6 && scrollPos < sp * 7) {
scrollSection = 6;
setDivision('nfcSouth');
setNumbers(true);
setTimeout( function() {nfcSouthAnim1.play(),500;} );
} 

else if ( scrollSection != 7 && 
  scrollPos >= sp * 7 && scrollPos < sp * 8) {
scrollSection = 7;
setDivision('nfcWest');
setNumbers(true);
} 
   else if ( scrollSection != 8 && 
scrollPos >= sp * 8 && scrollPos < sp * 9) {
scrollSection = 8;
setDivision('nfcWest');
setNumbers(true);
setTimeout( function() {nfcWestAnim1.play(),500;} );
} 


  

}

var nfcEastAnim1 = anime({
  targets: 'div.box',
  translateX: [
    { value: function(el, i, li) {
        if (i == 2) {
          return 200;
        } else if (i == 3) {
          return 200;
        } else
           return 0;
      }, duration: 750 },
    { value: 0, duration: 500, delay: 1200 },
  ],
  translateY: [
    { value: function(el, i, li) {
        if (i == 2) {
          return 125;
        } else if (i == 3) {
          return -125;
        }
        else {
           return 0;
        }
      }, duration: 1000, delay: 1000 },
  ],
  rotate: {
    delay: 500,
    value: function(el, i, li) {
        if (i == 2) {
          return '1turn';
        } else if (i == 3) {
          return '1turn';
        } else {
           return '0turn';
        }
      },
    easing: 'easeInOutSine'
  },
  autoplay: false,
  loop: false
 });

 var nfcWestAnim1 = anime({
  targets: 'div.box',
  translateX: [
    { value: function(el, i, li) {
        if (i == 0) {
          return 200;
        } else if (i == 1) {
          return 200;
        } else if (i == 2) {
          return 200;
        } else if (i == 3) {
          return 200;
        } else
           return 0;
      }, duration: 750 },
    { value: 0, duration: 500, delay: 1200 },
  ],
  translateY: [
    { value: function(el, i, li) {
        if (i == 0) {
          return 125;
        } else if (i == 1) {
          return -125;
        } else if (i == 2) {
          return 125;
        } else if (i == 3) {
          return -125;
        }
        else {
           return 0;
        }
      }, duration: 1000, delay: 1000 },
  ],
  rotate: {
    delay: 500,
    value: function(el, i, li) {
        if (i == 0) {
          return '1turn';
        } else if (i == 1) {
          return '1turn';
        } else if (i == 2) {
          return '1turn';
        } else if (i == 3) {
          return '1turn';
        } else {
           return '0turn';
        }
      },
    easing: 'easeInOutSine'
  },
  autoplay: false,
  loop: false
 });


 var nfcSouthAnim1 = anime({
  targets: 'div.box',
  translateX: [
    { value: function(el, i, li) {
        if (i == 1) {
          return 200;
        } else if (i == 2) {
          return 200;
        } else if (i == 3) {
          return 200;
        } else
           return 0;
      }, duration: 750 },
    { value: 0, duration: 500, delay: 1200 },
  ],
  translateY: [
    { value: function(el, i, li) {
        if (i == 1) {
          return 250;
        } else if (i == 2) {
          return -125;
        } else if (i == 3) {
          return -125;
        }
        else {
           return 0;
        }
      }, duration: 1000, delay: 1000 },
  ],
  rotate: {
    delay: 500,
    value: function(el, i, li) {
        if (i == 1) {
          return '1turn';
        } else if (i == 2) {
          return '1turn';
        } else if (i == 3) {
          return '1turn';
        } else {
           return '0turn';
        }
      },
    easing: 'easeInOutSine'
  },
  autoplay: false,
  loop: false
 });

 
var nfcNorthAnim1 = anime({
  targets: 'div.box',
  translateX: [
    { value: function(el, i, li) {
        if (i == 2) {
          return 200; 
        } else if (i == 1) {
          return 200;
        } else if (i == 3) {
          return 200;
        }else
           return 0;
      }, duration: 750 },
    { value: 0, duration: 500, delay: 1200 },
  ],
  translateY: [
    { value: function(el, i, li) {
        if (i == 2) {
          return 135; 
        } else if (i == 1) {
          return 135;
        } 
        else if (i == 3) {
          return -255;
        } else
           return 0;
      }, duration: 1000, delay: 1000 },
  ],
  rotate: {
    delay: 500,
    value: function(el, i, li) {
        if (i == 2) {
          return '1turn'; 
        } else if (i == 1) {
          return '1turn';
        } else if (i == 3) {
          return '1turn';
        }else
           return '0turn';
      },
    easing: 'easeInOutSine'
  },
  autoplay: false,
  loop: false
});


//document.querySelector('#boxes .play').onclick = playPause.play;
//document.querySelector('#boxes .pause').onclick = playPause.pause;
