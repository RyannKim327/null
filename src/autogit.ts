/**
 * Calculates the area of a triangle given its base and height.
 * 
 * @param base - The length of the base of the triangle.
 * @param height - The height of the triangle corresponding to the base.
 * @returns The area of the triangle.
 */
function calculateTriangleArea(base: number, height: number): number {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive numbers.");
    }
    return 0.5 * base * height;
}

// Example usage:
const base = 10; // units
const height = 5; // units
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is ${area} square units.`);
The area of the triangle is 25 square units.
/**
 * Calculates the area of a triangle using Heron's formula.
 * 
 * @param a - Length of side a.
 * @param b - Length of side b.
 * @param c - Length of side c.
 * @returns The area of the triangle.
 * @throws Will throw an error if the sides cannot form a valid triangle.
 */
function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error("All sides must be positive numbers.");
    }

    // Check if the sides can form a triangle
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("The given sides do not form a valid triangle.");
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage:
const sideA = 7; // units
const sideB = 10; // units
const sideC = 5; // units
const areaHeron = calculateTriangleAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle is ${areaHeron.toFixed(2)} square units.`);
The area of the triangle is 16.25 square units.
/**
 * Converts degrees to radians.
 * 
 * @param degrees - Angle in degrees.
 * @returns Angle in radians.
 */
function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Calculates the area of a triangle given two sides and the included angle.
 * 
 * @param a - Length of side a.
 * @param b - Length of side b.
 * @param angleDegrees - The included angle between sides a and b in degrees.
 * @returns The area of the triangle.
 * @throws Will throw an error if any side length is non-positive or if angle is invalid.
 */
function calculateTriangleAreaWithAngle(a: number, b: number, angleDegrees: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("Side lengths must be positive numbers.");
    }

    if (angleDegrees <= 0 || angleDegrees >= 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }

    const angleRadians = degreesToRadians(angleDegrees);
    const area = 0.5 * a * b * Math.sin(angleRadians);
    return area;
}

// Example usage:
const sideA_angle = 8; // units
const sideB_angle = 6; // units
const angle = 60; // degrees
const areaWithAngle = calculateTriangleAreaWithAngle(sideA_angle, sideB_angle, angle);
console.log(`The area of the triangle is ${areaWithAngle.toFixed(2)} square units.`);
The area of the triangle is 20.78 square units.
