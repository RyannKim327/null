/**
 * Calculate area of a triangle given base and height
 * @param base - length of the base of the triangle
 * @param height - height of the triangle
 * @returns area of the triangle
 */
function areaByBaseHeight(base: number, height: number): number {
    return (base * height) / 2;
}

/**
 * Calculate area of a triangle using Heron's formula
 * @param a - length of side a
 * @param b - length of side b
 * @param c - length of side c
 * @returns area of the triangle or null if sides do not form a triangle
 */
function areaBySides(a: number, b: number, c: number): number | null {
    const s = (a + b + c) / 2;

    // Check if the sides can form a triangle
    if (s <= a || s <= b || s <= c) {
        return null; // Sides do not form a triangle
    }

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

/**
 * Calculate area of a triangle given two sides and an included angle
 * @param a - length of side a
 * @param b - length of side b
 * @param angleInRadians - included angle in radians
 * @returns area of the triangle
 */
function areaByTwoSidesAndAngle(a: number, b: number, angleInRadians: number): number {
    return (a * b * Math.sin(angleInRadians)) / 2;
}

// Example usage:
const area1 = areaByBaseHeight(5, 10);
console.log(`Area by base and height: ${area1}`);

const area2 = areaBySides(3, 4, 5);
console.log(`Area by sides (3, 4, 5): ${area2}`);

const area3 = areaByTwoSidesAndAngle(5, 7, Math.PI / 4); // Angle of 45 degrees in radians
console.log(`Area by two sides and angle: ${area3}`);
