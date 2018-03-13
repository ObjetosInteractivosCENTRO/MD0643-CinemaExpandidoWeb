/*
 *
 * Cinema Expandido WEB
 * Pixel Array (13 de febrero 2018)
 * Carles Asensio
 * 
 *
 * URL: 
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

// Video
var video;

/*
 *****************************************
 *****************************************
 * Life Cycle METHODS
 *****************************************
 *****************************************
 */
function setup() {
  createCanvas(1080,1920);
initializeVideo()
}

function draw() {
  drawVideo();
}

/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */
 
 function initializeVideo(){
   video = createVideo("assets/videos/fotocopy.mov"); 
   video.loop();
   video.hide();

   
 }
 
 function drawVideo(){
   
   video.loadPixels();
   
   video.pixels[0]=255;
   video.pixels[1]=0;
   video.pixels[2]=0;
   video.pixels[3]=255;
   
   video.updatePixels();
   
   image(video,0,0);
 }
 