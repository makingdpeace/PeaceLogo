
//********************************
// DRAW THE PEACE AS AN OBJECT
//********************************

// let Peace1;
// let x = 0;
// let y = 0;
let peaceSize = 400;
let sqImgSize = 440;


function setup () {
  createCanvas(windowWidth, windowHeight); //size if filling browser
  createCanvas(sqImgSize, sqImgSize); //fixed canvas for printing to image file
  //clear(); //set background clear for PNG

}

function draw () {
  //background(255, 255, 255); //setbackground white if needed
  background(0, 0, 0); //setbackground black if needed

  //Peace(windowWidth/2, windowHeight/2, peaceSize);
  Peace(sqImgSize/2, sqImgSize/2, peaceSize);
}


function Peace(cen_x, cen_y, peaceSize) {
  diam = peaceSize/2;
  offset = peaceSize/4;
  theo = (sqrt(3)/2)*offset; //theodorus constant

  noFill();
  //stroke(0,0,0); //black circles
  stroke(255,255,255); //white circles
  strokeWeight(8);
  
  circle(cen_x, cen_y, diam); //centre
  
  circle(cen_x+offset/2, cen_y+theo, diam); //right bottom
  
  circle(cen_x-offset/2, cen_y-theo, diam); //left top
  circle(cen_x-offset, cen_y, diam); //left centre
  circle(cen_x-offset/2, cen_y+theo, diam); //left bottom

  //stroke(130, 179, 220); //cov club colour
  circle(cen_x+offset/2, cen_y-theo, diam); // right top - cov club 


  //stroke(255, 192, 203); //evie colour
  circle(cen_x+offset, cen_y, diam); //right centre - evie peace
  

  saveCanvas('peace-whiteonblack', 'png'); // saves right after drawing
  noLoop(); // stops draw loop

}



// //********************************
// // DRAW THE PEACE AS AN OBJECT
// //********************************

// let Peace1;
// let x = 0;
// let y = 0;
// let size = 400;


// function setup () {
//   createCanvas(windowWidth, windowHeight);
//   Peace1  = new Peace(x, y, size);

// }

// function draw () {
//   background(120);

//   Peace1.draw(); 

// }


// function Peace(cen_x, cen_y, size) {
//   this.cen_x = cen_x;
//   this.cen_y = cen_y;
//   this.diam = size/2;
//   this.offset = size/4;
//   this.theo = (sqrt(3)/2)*this.offset; //theodorus constant

//   this.draw = function() {
//     noFill();
//     stroke(255);
//     strokeWeight(8);
//     circle(this.cen_x, this.cen_y, this.diam);
//     circle(this.cen_x+this.offset, this.cen_y, this.diam);
//     circle(this.cen_x-this.offset, this.cen_y, this.diam);
//     circle(this.cen_x+this.offset/2, this.cen_y+this.theo, this.diam);
//     circle(this.cen_x-this.offset/2, this.cen_y+this.theo, this.diam);
//     circle(this.cen_x+this.offset/2, this.cen_y-this.theo, this.diam);
//     circle(this.cen_x-this.offset/2, this.cen_y-this.theo, this.diam);

//   }

// }



// let diam;
// let radius;
// let theo;
// let cenwid;
// let cenhi;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   cenwid = windowWidth/2;
//   cenhi = windowHeight/2;
//   diam = 200;
//   radius = diam/2;
//   theo = sqrt(3)/2; //theodorus constant
// }


// function draw() {
//   background(0);

//   noFill();
//   stroke(255);
//   strokeWeight(8);

//   // textSize(32);
//   // text(diam, 10, 30);
//   // text(radius, 10, 60);
//   // text(theo, 10, 90);
//   // text(cenhi, 10, 120);
//   // text(cenwid, 10, 150);


//   circle(cenwid, cenhi, diam);
//   circle(cenwid+radius, cenhi, diam);
//   circle(cenwid-radius, cenhi, diam);
//   circle(cenwid+(radius/2), cenhi+(theo*(radius)), diam);
//   circle(cenwid-(radius/2), cenhi+(theo*(radius)), diam);
//   circle(cenwid+(radius/2), cenhi-(theo*(radius)), diam);
//   circle(cenwid-(radius/2), cenhi-(theo*(radius)), diam);


// }







//********************************
// DRAW SIMPLE ELIPSE
//********************************
// function setup() {
//   // put setup code here
// }

// function draw() {
//   ellipse(50, 50, 80, 80);
// }


//********************************
//LOAD AN IMAGE FROM DISK
//********************************
// var img;


// function preload() {
//   img = loadImage("/Users/jamesmunro/Documents/PeaceMaking Docs/Website/Tile.png");  
// }


// function setup() {
//   createCanvas(600, 600);
// }

// function draw() {
//   background(220);
//   image(img, 0, 0);
// }