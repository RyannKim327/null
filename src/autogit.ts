function calculateTriangleAreaBaseHeight(base: number, height: number): number {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive numbers.");
    }
    return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
const area = calculateTriangleAreaBaseHeight(base, height);
console.log(`The area of the triangle is ${area}`); // Output: The area of the triangle is 25
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
const sideA = 5;
const sideB = 6;
const sideC = 7;
const areaHeron = calculateTriangleAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle is ${areaHeron.toFixed(2)}`); // Output: The area of the triangle is 14.70
function calculateTriangleAreaTwoSidesAngle(a: number, b: number, angleDegrees: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("Sides must be positive numbers.");
    }

    if (angleDegrees <= 0 || angleDegrees >= 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }

    const angleRadians = (angleDegrees * Math.PI) / 180;
    const area = 0.5 * a * b * Math.sin(angleRadians);
    return area;
}

// Example usage:
const sideA = 5;
const sideB = 6;
const angle = 60; // Angle in degrees
const areaAngle = calculateTriangleAreaTwoSidesAngle(sideA, sideB, angle);
console.log(`The area of the triangle is ${areaAngle.toFixed(2)}`); // Output: The area of the triangle is 12.99
// Function using base and height
function calculateTriangleAreaBaseHeight(base: number, height: number): number {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive numbers.");
    }
    return 0.5 * base * height;
}

// Function using Heron's formula
function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error("All sides must be positive numbers.");
    }

    // Triangle inequality check
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("The given sides do not form a valid triangle.");
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Function using two sides and included angle
function calculateTriangleAreaTwoSidesAngle(a: number, b: number, angleDegrees: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("Sides must be positive numbers.");
    }

    if (angleDegrees <= 0 || angleDegrees >= 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }

    const angleRadians = (angleDegrees * Math.PI) / 180;
    const area = 0.5 * a * b * Math.sin(angleRadians);
    return area;
}

// Demonstration of all methods
function main() {
    try {
        // Method 1: Base and Height
        const base = 10;
        const height = 5;
        const areaBH = calculateTriangleAreaBaseHeight(base, height);
        console.log(`Area using base and height: ${areaBH}`);

        // Method 2: Heron's Formula
        const sideA = 5;
        const sideB = 6;
        const sideC = 7;
        const areaHeron = calculateTriangleAreaHeron(sideA, sideB, sideC);
        console.log(`Area using Heron's formula: ${areaHeron.toFixed(2)}`);

        // Method 3: Two Sides and Included Angle
        const angle = 60; // degrees
        const areaAngle = calculateTriangleAreaTwoSidesAngle(sideA, sideB, angle);
        console.log(`Area using two sides and angle: ${areaAngle.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
    }
}

main();
Area using base and height: 25
Area using Heron's formula: 14.70
Area using two sides and angle: 12.99
