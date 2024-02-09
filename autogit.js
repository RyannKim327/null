function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

var base = 5; // triangle's base length
var height = 10; // triangle's height length

var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
