function calculateTriangleArea(base, height) {
  // check for valid inputs
  if (base <= 0 || height <= 0) {
    return 'Please provide positive values for base and height.';
  }

  const area = (base * height) / 2;
  return area;
}
const base = 10;
const height = 5;

const area = calculateTriangleArea(base, height);
console.log('Triangle Area:', area);
Triangle Area: 25
