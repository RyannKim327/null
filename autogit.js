// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  // Check if the base or height is negative or zero
  if (base <= 0 || height <= 0) {
    return "Base and height should be positive numbers.";
  }

  // Calculate the area
  var area = 0.5 * base * height;
  
  return area;
}

// Example usage
var base = 5;
var height = 8;
var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
