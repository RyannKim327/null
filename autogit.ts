function calculateTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}
function calculateHeronArea(a: number, b: number, c: number): number | null {
  const s = (a + b + c) / 2;
  const areaSquared = s * (s - a) * (s - b) * (s - c);
  
  if (areaSquared <= 0) {
    // Sides don't form a valid triangle
    return null;
  }
  
  return Math.sqrt(areaSquared);
}
