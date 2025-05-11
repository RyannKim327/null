function triangleArea(base: number, height: number): number {
  return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
console.log(`The area of the triangle is ${triangleArea(base, height)}`);
function triangleAreaHeron(a: number, b: number, c: number): number | null {
  const s = (a + b + c) / 2;
  const areaSquared = s * (s - a) * (s - b) * (s - c);

  if (areaSquared < 0) {
    // Invalid triangle side lengths
    return null;
  }

  return Math.sqrt(areaSquared);
}

// Example usage:
const a = 7;
const b = 8;
const c = 9;
const area = triangleAreaHeron(a, b, c);
if (area !== null) {
  console.log(`Area calculated with Heron's formula: ${area}`);
} else {
  console.log("Invalid triangle side lengths.");
}
