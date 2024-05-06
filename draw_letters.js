/* these are optional special variables which will change the system */
var systemBackgroundColor = "FFFFFF";
var systemLineColor = "#000000";
var systemBoxColor = "#C73869";

/* internal constants */
const white  = "#FFFFFF"; // White color
const black  = "#000000"; // Black color
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  angleMode(DEGREES)

  // Color/stroke setup
  stroke(black);
  strokeWeight(1);

  // Determine parameters for trapezoids
  let height = 10; // Height of the trapezoids
  
  // Parameters for trapezoid 1
  let size1 = letterData["size1"]; // Size of the trapezoids
  let pos1x = letterData["offsetx"]; // Position of the left base of trapezoid
  let posy = 100 + letterData["offsety"]; // Vertical position of the trapezoids
  let rotation1 = (letterData["rotation1"]); // Convert rotation to radians

  // Parameters for trapezoid 2
  let size2 = letterData["size2"]; // Size of the trapezoids
  let pos2x = 100 + letterData["offsetx2"]; // Position of the right base of trapezoid
  let pos2y = 100 + letterData["offsety2"]; // Vertical position of the second trapezoid
  let rotation2 = (letterData["rotation2"]); // Convert rotation to radians
  
  // Parameters for trapezoid 3
  let size3 = letterData["size3"]; // Size of the trapezoids
  let pos3x = letterData["offsetx3"]; // Position of the left base of trapezoid
  let pos3y = 100 + letterData["offsety3"]; // Vertical position of the trapezoids
  let rotation3 = (letterData["rotation3"]); // Convert rotation to radians
  
  // Parameters for trapezoid 4
  let size4 = letterData["size4"]; // Size of the trapezoids
  let pos4x = letterData["offsetx4"]; // Position of the right base of trapezoid
  let pos4y =  100 + letterData["offsety4"]; // Vertical position of the second trapezoid
  let rotation4 = (letterData["rotation4"]); // Convert rotation to radians
  
  // Parameters for trapezoid 5
  let size5 = letterData["size5"]; // Size of the trapezoids
  let pos5x = letterData["offsetx5"]; // Position of the left base of trapezoid
  let pos5y = 100 + letterData["offsety5"]; // Vertical position of the trapezoids
  let rotation5 = (letterData["rotation5"]); // Convert rotation to radians

  // Draw five trapezoids
  fill(white); // Fill color for the trapezoids

  // Draw Trapezoid 1
  push();
  translate(pos1x, posy);
  rotate(rotation1);
  beginShape();
  vertex(0, 0); // Bottom-left
  vertex(size1, 0); // Bottom-right
  vertex(size1 - height, -height); // Top-right
  vertex(height, -height); // Top-left
  endShape(CLOSE);
  pop();

  // Draw Trapezoid 2
  push();
  translate(pos2x, pos2y);
  rotate(rotation2);
  beginShape();
  vertex(0, 0); // Bottom-left
  vertex(- size2, 0); // Bottom-right
  vertex(- size2 + height, -height); // Top-right
  vertex(- height, -height); // Top-left
  endShape(CLOSE);
  pop();

  // Draw Trapezoid 3
  push();
  translate(pos3x, pos3y);
  rotate(rotation3);
  beginShape();
  vertex(0, 0); // Bottom-left
  vertex(size3, 0); // Bottom-right
  vertex(size3 - height, -height); // Top-right
  vertex(height, -height); // Top-left
  endShape(CLOSE);
  pop();
  
  // Draw Trapezoid 4
  push();
  translate(pos4x, pos4y);
  rotate(rotation4);
  beginShape();
  vertex(0, 0); // Bottom-left
  vertex(size4, 0); // Bottom-right
  vertex(size4 - height, -height); // Top-right
  vertex(height, -height); // Top-left
  endShape(CLOSE);
  pop();

  // Draw Trapezoid 5
  push();
  translate(pos5x, pos5y);
  rotate(rotation5);
  beginShape();
  vertex(0, 0); // Bottom-left
  vertex(size5, 0); // Bottom-right
  vertex(size5 - height, -height); // Top-right
  vertex(height, -height); // Top-left
  endShape(CLOSE);
  pop();
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size1"] = map(percent, 0, 91, oldObj["size1"], newObj["size1"]);
  new_letter["offsetx"] = map(percent, 0, 91, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 91, oldObj["offsety"], newObj["offsety"]);
  new_letter["rotation1"] = map(percent, 0, 91, oldObj["rotation1"], newObj["rotation1"]);
  new_letter["size2"]    = map(percent, 0, 91, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx2"] = map(percent, 0, 91, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 91, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["rotation2"] = map(percent, 0, 91, oldObj["rotation2"], newObj["rotation2"]);
  new_letter["size3"]    = map(percent, 0, 91, oldObj["size3"], newObj["size3"]);
  new_letter["offsetx3"] = map(percent, 0, 91, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 91, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["rotation3"] = map(percent, 0, 91, oldObj["rotation3"], newObj["rotation3"]);
  new_letter["size4"]    = map(percent, 0, 91, oldObj["size4"], newObj["size4"]);
  new_letter["offsetx4"] = map(percent, 0, 91, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 91, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["rotation4"] = map(percent, 0, 91, oldObj["rotation4"], newObj["rotation4"]);
  new_letter["size5"]    = map(percent, 0, 91, oldObj["size5"], newObj["size5"]);
  new_letter["offsetx5"] = map(percent, 0, 91, oldObj["offsetx5"], newObj["offsetx5"]);
  new_letter["offsety5"] = map(percent, 0, 91, oldObj["offsety5"], newObj["offsety5"]);
  new_letter["rotation5"] = map(percent, 0, 91, oldObj["rotation5"], newObj["rotation5"]);

  return new_letter;
}

var swapWords = [
  "ORIGAMII",
  "ACTUALLY",
  "APPENDIX",
  "SHIPPING",
  "SITUATED",
  "PLEASANT",
  "MEDICINE",
]