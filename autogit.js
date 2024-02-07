Area = (base * height) / 2
// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage
var triangleBase = 10;
var triangleHeight = 5;

var triangleArea = calculateTriangleArea(triangleBase, triangleHeight);
console.log("The area of the triangle is: " + triangleArea);
