// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage
var base = 5;
var height = 3;
var area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);
