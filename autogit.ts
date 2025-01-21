function calculateTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}
const base = 5;
const height = 6;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is ${area}`);
The area of the triangle is 15
function calculateTriangleArea(base: number, height: number): number | undefined {
  if (base <= 0 || height <= 0) {
    return undefined; // or throw an error, depending on your needs
  }
  return (base * height) / 2;
}
