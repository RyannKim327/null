function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is ${area}`);  // Output: The area of the triangle is 25
function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2;  // semiperimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Example usage:
const sideA = 5;
const sideB = 6;
const sideC = 7;
const areaHeron = calculateTriangleAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle is ${areaHeron}`);
