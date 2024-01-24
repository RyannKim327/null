function calculateTriangleArea(base, height) {
  // Check if base and height are positive numbers
  if (base > 0 && height > 0) {
    // Calculate the area using the formula
    var area = (base * height) / 2;
    return area;
  } else {
    // Handle invalid input
    return "Base and height must be positive numbers.";
  }
}

// Example usage
var triangleBase = 5;
var triangleHeight = 7;
var triangleArea = calculateTriangleArea(triangleBase, triangleHeight);
console.log("The area of the triangle is: " + triangleArea);
