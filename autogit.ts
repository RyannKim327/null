function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is: ${area}`);
function calculateAreaHeron(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2; // semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Example usage:
const sideA = 5;
const sideB = 6;
const sideC = 7;
const areaHeron = calculateAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle using Heron's formula is: ${areaHeron}`);
