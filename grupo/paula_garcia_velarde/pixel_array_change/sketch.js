/*
 *
 * Cinema Expandido WEB
 * Pixel Array (13 de marzo 2018)
 * Paula García
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

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
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



function initializeVideo() {
  video = createVideo('assets/videos/color.mov');
  video.loop();
  video.hide();
}

function drawVideo() {
  var correctionX = (windowWidth / 2) - (300 / 2);
  var correctionY = (windowHeight / 2) - (300 / 2);

  video.loadPixels();


  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {

      var index = (x + (y * video.width)) * 4;
      video.pixels[index] = video.pixels[index*2];
      video.pixels[index+1] = video.pixels[index+98 * 9 - 9 ] * [frameRate];
      video.pixels[index+2] = video.pixels[index + 250 * 90 ] * 100;
      video.pixels[index+3] = video.pixels[index * 3 - 78000] * 200;

    }

  }

  video.updatePixels();

  image(video, correctionX, correctionY, 300, 300);
}