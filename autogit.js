function calculateTriangleArea(base, height) {
  var area = 0.5 * base * height;
  return area;
}

// Example usage:
var triangleBase = 10;
var triangleHeight = 5;
var triangleArea = calculateTriangleArea(triangleBase, triangleHeight);
console.log('The area of the triangle is: ' + triangleArea);
