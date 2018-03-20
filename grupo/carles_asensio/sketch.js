
var video 

function setup() {
  createCanvas(600,400);
  
video = createVideo('assets/fingers.mov');
video.loop();
video.hide();

}

function draw() {
  background(255);
  
  image(video,0,0);
  
  
  
}