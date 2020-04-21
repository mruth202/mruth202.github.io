var box1,box2,box3,box4;

function setDivision(division) {
  box1 = document.getElementById("box1");
  box2 = document.getElementById("box2");
  box3 = document.getElementById("box3");
  box4 = document.getElementById("box4");

  if (division === "nfcNorth") {
    box1.style.backgroundImage = "url('images/bears100.png')";
    box2.style.backgroundImage = "url('images/vikings100.png')";
    box3.style.backgroundImage = "url('images/packers100.png')";
    box4.style.backgroundImage = "url('images/lions100.png')";
  }
  else if (division === "nfcEast") {
    box1.style.backgroundImage = "url('imgs/cowboys100.png')";
    box2.style.backgroundImage = "url('imgs/eagles100.png')";
    box3.style.backgroundImage = "url('imgs/giants100.png')";
    box4.style.backgroundImage = "url('imgs/redskins100.png')"; 
  } 
  else if (division === "nfl") {
    box1.style.backgroundImage = "url('imgs/blank.png')";
    box2.style.backgroundImage = "url('imgs/blank.png')";
    box3.style.backgroundImage = "url('imgs/blank.png')";
    box4.style.backgroundImage = "url('imgs/blank.png')"; 
  } 

  var x = Math.round(box1.getBoundingClientRect().x);
  var y = Math.round(box1.getBoundingClientRect().y);
 
  //console.log( 'box1: ('+ x + ',' + y + ')' + '\n' );
  //console.log( box1.getAttribute("style: background-image") + '\n' );
  //console.log( box1.style.backgroundImage + '\n' );  
  console.log( box1.style.backgroundImage + '\n' );
//console.log(boxA.style.backgroundColor);

}
function onloadFunc() {
  setTimeout( function() {setDivision('nfl'),500; document.documentElement.scrollTop=0} );
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  document.documentElement.scrollLeft = document.body.scrollLeft = 0;
}

var scrollSection = 0;
window.onscroll = function() {scrollFunc()};
function scrollFunc() {
  var sp = 300;
  scrollPos = document.documentElement.scrollTop;
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
    setNumbers(false);
  } else if ( scrollSection != 2 && 
             scrollPos >= sp * 2 && scrollPos < sp * 3) {
    scrollSection = 2;
    setDivision('nfcNorth');
    setNumbers(true);
    nfcNorthAnim1.play();
  } 
}



//setTimeout(function(){setDivision('nfcNorth');},500);
var playPause = anime({
  targets: 'div.box',
  translateY: [
      {value:200, duration:500},
      {value:0, duration:800}
  ],
  rotate:{
      delay:1000,
      value:'1turn',
      easing:'easeInOutSine'
  },
  delay:function(el,i,l){return i * 1000},
  autoplay:false,
  loop:false
})

var nfcNorthAnim1 = anime({
  targets: 'div.box',
  translateX: 
  [
    { value: function(el, i, li) {
      if (i == 0) {
        return 200; 
      } else if (i == 1) {
        return 200;
      } else
         return 0;

      }, duration: 500 },
    { value: 0, duration: 500, delay: 500 },
  ],
  translateY: 
  [
    { value: function(el, i, li) {
      if (i == 0) {
        return 135; 
      } else if (i == 1) {
        return -135;
      } else
         return 0;

      }, duration: 500, delay: 500 },
  ]
,
  rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
  },
  autoplay: false,
  loop: false
});


//document.querySelector('#boxes .play').onclick=playPause.play;
//document.querySelector('#boxes .pause').onclick=playPause.pause;