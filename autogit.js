Area = (base * height) / 2
// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage:
var base = 5; // length of the base of the triangle
var height = 3; // height of the triangle

var area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);
