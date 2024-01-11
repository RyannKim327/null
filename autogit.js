function calculateTriangleArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Example usage
let base = 5;
let height = 3;
let area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);
