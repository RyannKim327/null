// function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  // check if the input values are valid
  if (base <= 0 || height <= 0) {
    return "Invalid input. Both base and height must be greater than zero.";
  }

  // calculate the area using the formula
  const area = (0.5 * base * height).toFixed(2);

  // return the area
  return area;
}

// test the function
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log("Area of the triangle:", area);
