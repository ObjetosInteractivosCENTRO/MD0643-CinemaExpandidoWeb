/*
 *
 * CINEMA EXPANDIDO WEB
 * PIXEL ARRAY (13/FEB/2018)
 * FRANCISCO GERARDO LEON MIRAMONTES
 * 
 *
 * URL
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 
 //video
 var video;
 
 /*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
function setup() {
  initializeVideo();
  createCanvas(1920,1080);
  
  
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
   video = createVideo("assets/videos/ass.mov");
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
 
 
 
 
 