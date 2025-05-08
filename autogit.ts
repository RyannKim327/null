function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is ${area}.`);
type Point = {
    x: number;
    y: number;
};

function calculateTriangleAreaByVertices(point1: Point, point2: Point, point3: Point): number {
    const area = Math.abs(point1.x * (point2.y - point3.y) +
                          point2.x * (point3.y - point1.y) +
                          point3.x * (point1.y - point2.y)) / 2;
    return area;
}

// Example usage:
const p1: Point = { x: 0, y: 0 };
const p2: Point = { x: 4, y: 0 };
const p3: Point = { x: 0, y: 3 };

const areaUsingVertices = calculateTriangleAreaByVertices(p1, p2, p3);
console.log(`The area of the triangle using vertices is ${areaUsingVertices}.`);
