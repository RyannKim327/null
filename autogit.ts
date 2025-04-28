function triangleAreaBaseHeight(base: number, height: number): number {
  return 0.5 * base * height;
}
interface Point {
  x: number;
  y: number;
}

function triangleAreaCoords(p1: Point, p2: Point, p3: Point): number {
  return Math.abs(
    p1.x * (p2.y - p3.y) +
    p2.x * (p3.y - p1.y) +
    p3.x * (p1.y - p2.y)
  ) / 2;
}
