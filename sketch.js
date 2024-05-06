const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 100,
  "shape1": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": 40,
    "offsety": -30,
    "rotation": 70
  },
  "shape2": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": -20,
    "offsety": -30,
    "rotation": 290
  },
  "shape3": {
    "topWidth": 80,
    "bottomWidth": 100,
    "height": 15,
    "offsetx": 10, // Adjust this value as needed
    "offsety": -30, // Adjust this value as needed
    "rotation": 0 // Adjust this value as needed
  },
  "shape4": {
    "topWidth": 80,
    "bottomWidth": 100,
    "height": 15,
    "offsetx": 10, // Adjust this value as needed
    "offsety": -30, // Adjust this value as needed
    "rotation": 0 // Adjust this value as needed
  }
};


const letterB = {
  "shape1": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": -20,
    "offsety": -20,
    "rotation": 270
  },
  "shape2": {
    "topWidth": 110,
    "bottomWidth": 140,
    "height": 20,
    "offsetx": 35,
    "offsety": 20,
    "rotation": 140
  },
  "shape3": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": 35, // Adjust this value as needed
    "offsety": -50, // Adjust this value as needed
    "rotation": 40 // Adjust this value as needed
  },
  "shape4": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": 35, // Adjust this value as needed
    "offsety": -20, // Adjust this value as needed
    "rotation": 180 // Adjust this value as needed
  }
};

const letterC = {
  "shape1": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": -50,
    "offsety": 0,
    "rotation": 270
  },
  "shape2": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": 20,
    "offsety": -70,
    "rotation": 360
  },
  "shape3": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": 20, // Adjust this value as needed
    "offsety": 70, // Adjust this value as needed
    "rotation": 180 // Adjust this value as needed
  },
  "shape4": {
    "topWidth": 130,
    "bottomWidth": 180,
    "height": 20,
    "offsetx": 20, // Adjust this value as needed
    "offsety": 70, // Adjust this value as needed
    "rotation": 180 // Adjust this value as needed
  }
};

const backgroundColor  = "#FFFFFF";

const white  = "#FFFFFF"; // vibrant green
const white2  = "#FFFFFF"; // lighter shade of green
const strokeColor  = "#000000"; // bright green for stroke color

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // Determine parameters for trapezoid
  let size = letterData["size"]; // Size of the trapezoid

  // Draw shape 1
  let shape1 = letterData["shape1"];
  let offsetx1 = letterData["shape1"]["offsetx"]; // Horizontal offset for shape 1
  let offsety1 = letterData["shape1"]["offsety"]; // Vertical offset for shape 1
  let rotation1 = letterData["shape1"]["rotation"]; // Rotation in degrees for shape 1

  // Convert rotation from degrees to radians
  let rotationRad1 = radians(rotation1);

  // Calculate the dimensions of the trapezoid based on the size
  let topWidth1 = shape1["topWidth"];
  let bottomWidth1 = shape1["bottomWidth"];
  let height1 = shape1["height"];

  // Calculate the position of shape 1
  let shape1PosX = posx + offsetx1;
  let shape1PosY = posy + offsety1;

  // Draw shape 1
  push(); // Save the current drawing style
  translate(shape1PosX, shape1PosY); // Translate to the position of shape 1
  rotate(rotationRad1); // Rotate shape 1
  beginShape();
  vertex(-bottomWidth1 / 2, 0); // Bottom-left
  vertex(bottomWidth1 / 2, 0); // Bottom-right
  vertex(topWidth1 / 2, -height1); // Top-right
  vertex(-topWidth1 / 2, -height1); // Top-left
  endShape(CLOSE);
  pop(); // Restore the previous drawing style

  // Draw shape 2
  let shape2 = letterData["shape2"];
  let offsetx2 = letterData["shape2"]["offsetx"]; // Horizontal offset for shape 2
  let offsety2 = letterData["shape2"]["offsety"]; // Vertical offset for shape 2
  let rotation2 = letterData["shape2"]["rotation"]; // Rotation in degrees for shape 2

  // Convert rotation from degrees to radians
  let rotationRad2 = radians(rotation2);

  // Calculate the dimensions of the trapezoid based on the size
  let topWidth2 = shape2["topWidth"];
  let bottomWidth2 = shape2["bottomWidth"];
  let height2 = shape2["height"];

  // Calculate the position of shape 2
  let shape2PosX = posx + offsetx2;
  let shape2PosY = posy + offsety2;

  // Draw shape 2
  push(); // Save the current drawing style
  translate(shape2PosX, shape2PosY); // Translate to the position of shape 2
  rotate(rotationRad2); // Rotate shape 2
  beginShape();
  vertex(-bottomWidth2 / 2, 0); // Bottom-left
  vertex(bottomWidth2 / 2, 0); // Bottom-right
  vertex(topWidth2 / 2, -height2); // Top-right
  vertex(-topWidth2 / 2, -height2); // Top-left
  endShape(CLOSE);
  pop(); // Restore the previous drawing style

  // Draw shape 3
let shape3 = letterData["shape3"];
let offsetx3 = shape3["offsetx"]
let offsety3 = shape3["offsety"] 
let rotation3 = shape3["rotation"]; // Rotation in degrees for shape 3

// Convert rotation from degrees to radians for shape 3
let rotationRad3 = radians(rotation3);

// Calculate the dimensions of the trapezoid based on the size for shape 3
let topWidth3 = shape3["topWidth"] 
let bottomWidth3 = shape3["bottomWidth"] 
let height3 = shape3["height"] 

// Calculate the position of shape 3
let shape3PosX = posx + offsetx3;
let shape3PosY = posy + offsety3;

// Draw shape 3
push(); // Save the current drawing style
translate(shape3PosX, shape3PosY); // Translate to the position of shape 3
rotate(rotationRad3); // Rotate shape 3
beginShape();
vertex(-bottomWidth3 / 2, 0); // Bottom-left
vertex(bottomWidth3 / 2, 0); // Bottom-right
vertex(topWidth3 / 2, -height3); // Top-right
vertex(-topWidth3 / 2, -height3); // Top-left
endShape(CLOSE);
pop(); // Restore the previous drawing style

  // Draw shape 4
  let shape4 = letterData["shape4"];
  let offsetx4 = letterData["shape4"]["offsetx"]; // Horizontal offset for shape 4
  let offsety4 = letterData["shape4"]["offsety"]; // Vertical offset for shape 4
  let rotation4 = letterData["shape4"]["rotation"]; // Rotation in degrees for shape 4

  // Convert rotation from degrees to radians
  let rotationRad4 = radians(rotation4);

  // Calculate the dimensions of the trapezoid based on the size
  let topWidth4 = shape4["topWidth"];
  let bottomWidth4 = shape4["bottomWidth"];
  let height4 = shape4["height"];

  // Calculate the position of shape 4
  let shape4PosX = posx + offsetx4;
  let shape4PosY = posy + offsety4;

  // Draw shape 4
  push(); // Save the current drawing style
  translate(shape4PosX, shape4PosY); // Translate to the position of shape 4
  rotate(rotationRad4); // Rotate shape 4
  beginShape();
  vertex(-bottomWidth4 / 2, 0); // Bottom-left
  vertex(bottomWidth4 / 2, 0); // Bottom-right
  vertex(topWidth4 / 2, -height4); // Top-right
  vertex(-topWidth4 / 2, -height4); // Top-left
  endShape(CLOSE);
  pop(); // Restore the previous drawing style

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}