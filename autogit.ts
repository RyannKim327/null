function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}
const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`Area of the triangle: ${area}`);
