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
function calculateTriangleAreaHeron(a: number, b: number, c: number): number {
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error("All sides must be positive numbers.");
    }

    // Check if the sides form a valid triangle
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
const heronArea = calculateTriangleAreaHeron(sideA, sideB, sideC);
console.log(`The area of the triangle is ${heronArea} square units.`);
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
const sideA = 6; // units
const sideB = 8; // units
const angle = 60; // degrees
const angleArea = calculateTriangleAreaTwoSidesAngle(sideA, sideB, angle);
console.log(`The area of the triangle is ${angleArea.toFixed(2)} square units.`);
// Method 1: Using Base and Height
function calculateTriangleAreaBaseHeight(base: number, height: number): number {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive numbers.");
    }
    return 0.5 * base * height;
}

// Method 2: Using Heron's Formula
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

// Method 3: Using Two Sides and the Included Angle
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

// Example Usage:
function main() {
    console.log("Choose a method to calculate the area of a triangle:");
    console.log("1. Using Base and Height");
    console.log("2. Using Three Sides (Heron's Formula)");
    console.log("3. Using Two Sides and the Included Angle");

    const choice = prompt("Enter the number of your choice (1/2/3): ");

    try {
        switch (choice) {
            case "1":
                const base = parseFloat(prompt("Enter the base length: ") || "0");
                const height = parseFloat(prompt("Enter the height: ") || "0");
                const area1 = calculateTriangleAreaBaseHeight(base, height);
                console.log(`The area of the triangle is ${area1} square units.`);
                break;

            case "2":
                const sideA = parseFloat(prompt("Enter the length of side A: ") || "0");
                const sideB = parseFloat(prompt("Enter the length of side B: ") || "0");
                const sideC = parseFloat(prompt("Enter the length of side C: ") || "0");
                const area2 = calculateTriangleAreaHeron(sideA, sideB, sideC);
                console.log(`The area of the triangle is ${area2} square units.`);
                break;

            case "3":
                const a = parseFloat(prompt("Enter the length of side A: ") || "0");
                const b = parseFloat(prompt("Enter the length of side B: ") || "0");
                const angle = parseFloat(prompt("Enter the included angle (degrees): ") || "0");
                const area3 = calculateTriangleAreaTwoSidesAngle(a, b, angle);
                console.log(`The area of the triangle is ${area3.toFixed(2)} square units.`);
                break;

            default:
                console.log("Invalid choice. Please select 1, 2, or 3.");
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unexpected error occurred.");
        }
    }
}

main();
