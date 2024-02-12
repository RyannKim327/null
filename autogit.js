// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage
var base = 5;    // Base of the triangle
var height = 8;  // Height of the triangle

// Call the function to calculate the area
var triangleArea = calculateTriangleArea(base, height);

// Print the result
console.log("The area of the triangle is: " + triangleArea);
