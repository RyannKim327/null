function triangleAreaBaseHeight(base: number, height: number): number {
  return 0.5 * base * height;
}

// Example:
const base = 10;
const height = 5;
console.log(triangleAreaBaseHeight(base, height)); // Output: 25
function triangleAreaHeron(a: number, b: number, c: number): number | null {
  const s = (a + b + c) / 2; // semi-perimeter
  const areaSquared = s * (s - a) * (s - b) * (s - c);
  if (areaSquared < 0) {
    console.error("Invalid triangle sides");
    return null;
  }
  return Math.sqrt(areaSquared);
}

// Example:
const sideA = 3;
const sideB = 4;
const sideC = 5;
console.log(triangleAreaHeron(sideA, sideB, sideC)); // Output: 6
function triangleAreaCoordinates(
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number
): number {
  return Math.abs(
    x1 * (y2 - y3) +
    x2 * (y3 - y1) +
    x3 * (y1 - y2)
  ) / 2;
}

// Example:
console.log(triangleAreaCoordinates(0, 0, 4, 0, 0, 3)); // Output: 6
