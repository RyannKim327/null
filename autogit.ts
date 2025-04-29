function calculateTriangleArea(base: number, height: number): number {
  return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`Area of the triangle is: ${area}`);
function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2; // semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Example usage:
const a = 7, b = 8, c = 9;
const areaHeron = calculateTriangleAreaHeron(a, b, c);
console.log(`Area of the triangle using Heron's formula: ${areaHeron}`);
