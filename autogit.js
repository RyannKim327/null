function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage
var triangleBase = 8;
var triangleHeight = 5;
var result = calculateTriangleArea(triangleBase, triangleHeight);
console.log("The area of the triangle is: " + result);
