// This is for hamburger menu
var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
// main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
    menuIcon[i].classList.toggle("active");
  }
});

function navToggle() {
  //to close
  if (nav.style.height <= "275px") {
    nav.style.height = "50px";
    // main.style.marginTop = "50px";

    var i = 0;
    for (i = 0; i < menu.length; i++){
      menu[i].style.opacity="0.0";
      // menu[i].style.marginTop="100px";
    };

  }
  //to open
  else if (nav.style.height <= "50px") {
    nav.style.height = "275px";
    // main.style.marginTop = "275px";
    var i = 0;
    for (i = 0; i < menu.length; i++){
      menu[i].style.opacity="1.0";
      menu[i].style.marginTop="0px";
    };

  }

};

// This is for the Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Count Up
function countUp(numberElement){
  let current = 0;
  const total = parseInt(numberElement.textContent);
  const increment = Math.ceil(total/4000);
  function step(){
    current += increment;
    if (current > total) current = total ;
    numberElement.textContent= current.toLocaleString();
    (current !== total ) && requestAnimationFrame(step);
  }
  step();
}
document.querySelectorAll('.number').forEach(elem => countUp(elem));
// Count Up ends here

// this is for the percentage Count up on about page

var canvas = document.getElementsByTagName('canvas');

for (var i = 0; i < canvas.length; i++) {
  progressBar(canvas[i].id);
}
function progressBar(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');

  // declares variables
  var cWidth = canvas.width;
  var cHeight = canvas.height;
  var progressColor = '#ED524E';
  var circleColor = '#333';
  var rawPerc = canvas.getAttribute('data-perc');
  // var definition = canvas.getAttribute('data-text');
  var perc = parseInt(rawPerc);
  var degrees = 0;
  var endDegrees = (360*perc)/100;
  // The 'brush' size
  var lineWidth = 7;
  // console.log(canvasId+' '+perc);

  function getDegrees() {
    if(degrees < endDegrees) {
      degrees++;
    }
    else {
      clearInterval(degreesCall);
    }

    drawProgressBar();
  }

  function drawProgressBar() {
    //clears the canvas after every instance
    ctx.clearRect(0,0,cWidth,cHeight);

    // The background circle
    ctx.beginPath();
    ctx.strokeStyle = circleColor;
    ctx.lineWidth = lineWidth -1;
    ctx.arc(cHeight/2, cWidth/2, cWidth/3, 0, Math.PI*2, false);
    ctx.stroke();
    var radians = 0; // converts the degrees to radians

    radians = degrees * Math.PI/180;
    // The progressBar
    ctx.beginPath();
    ctx.strokeStyle = progressColor;
    ctx.lineWidth = lineWidth;
    ctx.arc(cHeight/2, cWidth/2, cWidth/3, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
    ctx.stroke();

    // let's get the text
    ctx.fillStyle = progressColor;
    ctx.font = '20px Arial';
    var outputTextPerc = Math.floor(degrees/360*100)+'%';
    var outputTextPercWidth = ctx.measureText(outputTextPerc).width;
    // var outputTextDefinitionWidth = ctx.measureText(definition).width;
    ctx.fillText(outputTextPerc, cWidth/1.7 - outputTextPercWidth/1.5, cHeight/1.7 - 10);
    // ctx.fillText(definition, cWidth/2 - outputTextDefinitionWidth/2, cHeight/2 + 15);
  }
  degreesCall = setInterval(getDegrees, 10/(degrees - endDegrees));
}

// the elements are cloned in order for the carousel to move infinitely
$(function() {
  var $first=$('#partners>:first-child');
  $('#partners').width($first.outerWidth(true));
  $first.clone(true).appendTo('#partners');
  $('#partners').addClass('ready');
});
// This is where the percentage Count Up ends
