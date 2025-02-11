function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log(`Area of triangle: ${area}`); // Output: Area of triangle: 25
function calculateTriangleAreaFromVertices(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): number {
    return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

// Example usage:
const x1 = 0, y1 = 0;
const x2 = 5, y2 = 0;
const x3 = 0, y3 = 10;

const areaFromVertices = calculateTriangleAreaFromVertices(x1, y1, x2, y2, x3, y3);
console.log(`Area of triangle from vertices: ${areaFromVertices}`); // Output: Area of triangle from vertices: 25
