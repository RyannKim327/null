function areaOfTriangle(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage
const base = 5;
const height = 10;
const area = areaOfTriangle(base, height);
console.log(`Area of the triangle: ${area}`); // Output: Area of the triangle: 25
function areaOfTriangleHeron(a: number, b: number, c: number): number {
    // Calculate semi-perimeter
    const s = (a + b + c) / 2;

    // Calculate area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage
const sideA = 3;
const sideB = 4;
const sideC = 5;
const areaHeron = areaOfTriangleHeron(sideA, sideB, sideC);
console.log(`Area of the triangle: ${areaHeron}`); // Output: Area of the triangle: 6
