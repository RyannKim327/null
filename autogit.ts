function triangleArea(base: number, height: number): number {
  return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
console.log(`Area of triangle: ${triangleArea(base, height)}`);  // Output: 25
function triangleAreaHeron(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Example usage:
console.log(triangleAreaHeron(3, 4, 5));  // Output: 6
