function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Calling the function
var base = 5;
var height = 7;
var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
