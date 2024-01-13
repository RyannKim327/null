function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage:
var triangleBase = 5;
var triangleHeight = 7;
var triangleArea = calculateTriangleArea(triangleBase, triangleHeight);

console.log("The area of the triangle is: " + triangleArea);
