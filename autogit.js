function calculateTriangleArea(base, height) {
  // Validate input
  if (base <= 0 || height <= 0) {
    return "Invalid input. Both base and height must be positive numbers.";
  }

  // Calculate and return the area
  const area = (base * height) / 2;
  return area;
}

// Example usage:
const base = 10;
const height = 5;
const triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
