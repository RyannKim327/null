function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is: ${area}`);
function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2;  // semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Example usage:
const sideA = 3;
const sideB = 4;
const sideC = 5;
const areaHeron = calculateTriangleAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle using Heron's formula is: ${areaHeron}`);
function calculateTriangleAreaByCoordinates(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): number {
    return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
}

// Example usage:
const x1 = 0, y1 = 0;
const x2 = 4, y2 = 0;
const x3 = 0, y3 = 3;
const areaByCoordinates = calculateTriangleAreaByCoordinates(x1, y1, x2, y2, x3, y3);
console.log(`The area of the triangle given the coordinates is: ${areaByCoordinates}`);
