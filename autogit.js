// Function to calculate the area of a triangle
function calculateArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage
var base = 5;
var height = 8;
var triangleArea = calculateArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
