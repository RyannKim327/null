function triangleAreaWithBaseHeight(base: number, height: number): number {
  return 0.5 * base * height;
}
function triangleAreaWithSides(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2; // semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(triangleAreaWithBaseHeight(10, 5)); // Output: 25
console.log(triangleAreaWithSides(3, 4, 5));   // Output: 6
