function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Example usage:
const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is: ${area}`); // Output: The area of the triangle is: 25
function calculateTriangleAreaBySides(a: number, b: number, c: number): number {
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage:
const sideA = 5;
const sideB = 6;
const sideC = 7;
const areaBySides = calculateTriangleAreaBySides(sideA, sideB, sideC);
console.log(`The area of the triangle by sides is: ${areaBySides}`); // Output will vary based on side lengths
