function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Example usage:
var base = 10; // triangle base length
var height = 5; // triangle height
var area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);
