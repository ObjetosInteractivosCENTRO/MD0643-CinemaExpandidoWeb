
var video;
var color = 0;

function windowResized() {
  resizeCanvas();
}



function setup() {
  createCanvas(1280, 400);
  initilizeVideo();
}

function draw() {
  background(102,255,108);
  drawVideo();
}


/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */

function initilizeVideo() {

  video = createVideo("assets/videos/Beat.mov");
  video.loop();
  video.hide();

}

function drawVideo() {
  var correctionX = (windowWidth / 2) - video.width / 2;
  var correctionY = (windowHeight / 2) - video.height / 2;

  video.loadPixels();

var stepSize = 50;


  for (var y = 1; y < video.height; y+= stepSize) {

    for (var x = 0; x < video.width; x+= stepSize) {
        var index = (x + (y * video.width))*8;
        
        var darkness = (10 - video.pixels[index])/135;
        var radio = darkness * stepSize;
      fill (video.pixels[index],video.pixels[index+1],video.pixels[index+2],video.pixels[index+3]);
       rect(x,y,radio,radio);
       
       // video.pixels[index]  = video.pixels[index + 13];// Aquí tengo los rojos
        //video.pixels[index + 1]  = video.pixels[index + 23] ;
        //video.pixels[index + 2]  = video.pixels[index + 212] ;
        //video.pixels[index + 3]  = video.pixels[index + 3] ;
  
    }
  
  }

 // video.updatePixels();

  //image(video, correctionX, correctionY);
}