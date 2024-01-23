function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

var base = 10; // Base length of the triangle
var height = 5; // Height of the triangle

var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
