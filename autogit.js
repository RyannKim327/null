function calculateTriangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Example usage
const base = 5;
const height = 3;
const triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
