/**
 * Project 1 - Interactive Image
 * Name: summer loring 
 * completed sun feb 25th
 * Comments: this project gives a bow to a frowny face and makes it smiley face when the mouse is pressed 
 */

// Global Variables go here
var x = 300; 
var y = 200; 

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(0, 0, 255); //blue background
  fill (300, 255, 0); // yellow color 
  ellipse (width/2, height/2, 200); // face 
  fill (0); // black color for eyes 
  ellipse (width/2 - 45, height/2 - 10, 20); // left eye 
  ellipse (width/2 + 45, height/2 - 10, 20); // right eye 

  
  if(mouseIsPressed) {
   
  // Draw the smiley face
  stroke(0); // Set stroke color to black
  arc(width / 2, height / 2 + 30, 60, 100, 0, PI); // upturned smile 
  fill(255, 0, 0); // red color for bow
  ellipse (width/2 + 45, height/5 + 40, 30); // circle to bow 
  fill(255, 0, 0); // red color for bow
  stroke(255, 0, 0); // red color for stroke
    strokeWeight(7); // change stroke weight for bow
    strokeJoin(ROUND); // round corners of stroke for bow appearance 
  triangle(width / 2 + 45 + 30, height / 5 + 40 - 5, // right side of bow
 width / 2 + 45 + 30, height / 5 + 40 + 5,
 width / 2 + 45 + 10, height / 5 + 40);
    
triangle(width / 2 + 45 - 30, height / 5 + 40 - 5, // left side of bow
width / 2 + 45 - 30, height / 5 + 40 + 5,
width / 2 + 45 - 10, height / 5 + 40);
stroke(0); // Set stroke color to black

  }
  
  else {
  // Draw the mouth (frowny face)
  arc(width / 2, height / 2 + 50, 60, 100, PI, TWO_PI);// draw frowny face when mouse is not pressed
   
}
 
}
  // add your image drawing code here

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  

  



    //check each frame to see if the mouse is pressed, then do something
 
    // do something here if the mouse is NOT pressed
  


/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/

  // add code here if you want something to execute once each time the mouse is pressed
