// Function to calculate triangle area
function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage
var base = 6;
var height = 4;
var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
