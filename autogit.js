// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  var area = (1/2) * base * height;
  return area;
}

// Example usage
var base = 5;
var height = 8;
var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
