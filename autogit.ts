function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`Area of the triangle: ${area}`);
function calculateHeronTriangleArea(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2; // Semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage
const sideA = 5;
const sideB = 6;
const sideC = 7;
const areaHeron = calculateHeronTriangleArea(sideA, sideB, sideC);
console.log(`Area of the triangle using Heron's formula: ${areaHeron}`);
