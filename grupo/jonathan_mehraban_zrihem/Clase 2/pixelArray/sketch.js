/*
 *
 * Cinema Expandido WEB
 * Pixel Array (13 de febrero 2018)
 * Adrian Santuario
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
  createCanvas(800,600);
  initializeVideo();
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
     video = createVideo("assets/videos/fingers.mov");
     video.loop();
     video.hide();
 }
 
 function drawVideo(){
   
   video.loadPixels();
   
   video.pixels[0]=255;
   video.pixels[1]=0;
   video.pixels[2]=0;
   video.pixels[3]=255;
   
   for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {

      var index = (x + (y * video.width)) * 30;
      video.pixels[index] = video.pixels[index*5];
      video.pixels[index+1] = video.pixels[index+30 *1 ] * [frameRate];
      video.pixels[index+2] = video.pixels[index + 250 * 9 ] * 2;
      video.pixels[index+3] = video.pixels[index * 3 - 70] * 2;

    }

  }


   video.updatePixels();
   image(video,0,0,800,600);
 }

