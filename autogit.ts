function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is: ${area}`);
interface Point {
    x: number;
    y: number;
}

function calculateTriangleAreaByVertices(p1: Point, p2: Point, p3: Point): number {
    return Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
}

// Example usage:
const vertex1: Point = { x: 0, y: 0 };
const vertex2: Point = { x: 5, y: 0 };
const vertex3: Point = { x: 0, y: 10 };

const areaByVertices = calculateTriangleAreaByVertices(vertex1, vertex2, vertex3);
console.log(`The area of the triangle formed by the vertices is: ${areaByVertices}`);
