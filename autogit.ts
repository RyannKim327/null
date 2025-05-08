function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage
const base = 5;   // Example base value
const height = 10; // Example height value
const area = calculateTriangleArea(base, height);

console.log(`The area of the triangle is: ${area}`);
function calculateAreaWithSides(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2; // Semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage
const side1 = 5;   // Length of side a
const side2 = 6;   // Length of side b
const side3 = 7;   // Length of side c
const areaWithSides = calculateAreaWithSides(side1, side2, side3);

console.log(`The area of the triangle using sides is: ${areaWithSides}`);
