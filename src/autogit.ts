function calculateTriangleAreaBaseHeight(base: number, height: number): number {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive numbers.");
    }
    return 0.5 * base * height;
}

// Example usage:
const base = 10; // units
const height = 5; // units
const area = calculateTriangleAreaBaseHeight(base, height);
console.log(`The area of the triangle is ${area} square units.`);
The area of the triangle is 25 square units.
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
const sideA = 5; // units
const sideB = 6; // units
const sideC = 7; // units
const heronArea = calculateTriangleAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle using Heron's formula is ${heronArea.toFixed(2)} square units.`);
The area of the triangle using Heron's formula is 14.70 square units.
function calculateTriangleAreaSAS(a: number, b: number, angleC_degrees: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("Side lengths must be positive numbers.");
    }
    if (angleC_degrees <= 0 || angleC_degrees >= 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }

    // Convert angle from degrees to radians
    const angleC_radians = (angleC_degrees * Math.PI) / 180;

    const area = 0.5 * a * b * Math.sin(angleC_radians);
    return area;
}

// Example usage:
const sideA_SAS = 5; // units
const sideB_SAS = 7; // units
const angleC = 45; // degrees
const sasArea = calculateTriangleAreaSAS(sideA_SAS, sideB_SAS, angleC);
console.log(`The area of the triangle using SAS method is ${sasArea.toFixed(2)} square units.`);
The area of the triangle using SAS method is 12.38 square units.
function calculateTriangleAreaBaseHeight(base: number, height: number): number {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive numbers.");
    }
    return 0.5 * base * height;
}

function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error("All sides must be positive numbers.");
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("The given sides do not form a valid triangle.");
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

function calculateTriangleAreaSAS(a: number, b: number, angleC_degrees: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("Side lengths must be positive numbers.");
    }
    if (angleC_degrees <= 0 || angleC_degrees >= 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }

    const angleC_radians = (angleC_degrees * Math.PI) / 180;
    const area = 0.5 * a * b * Math.sin(angleC_radians);
    return area;
}

// Example usages:

// Using Base and Height
try {
    const base = 10;
    const height = 5;
    const areaBH = calculateTriangleAreaBaseHeight(base, height);
    console.log(`Area (Base-Height): ${areaBH} square units`);
} catch (error) {
    console.error(error.message);
}

// Using Heron's Formula
try {
    const sideA = 5;
    const sideB = 6;
    const sideC = 7;
    const areaHeron = calculateTriangleAreaHeron(sideA, sideB, sideC);
    console.log(`Area (Heron's Formula): ${areaHeron.toFixed(2)} square units`);
} catch (error) {
    console.error(error.message);
}

// Using SAS Method
try {
    const sideA_SAS = 5;
    const sideB_SAS = 7;
    const angleC = 45;
    const areaSAS = calculateTriangleAreaSAS(sideA_SAS, sideB_SAS, angleC);
    console.log(`Area (SAS Method): ${areaSAS.toFixed(2)} square units`);
} catch (error) {
    console.error(error.message);
}
Area (Base-Height): 25 square units
Area (Heron's Formula): 14.70 square units
Area (SAS Method): 12.38 square units
