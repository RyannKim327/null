Area = (base * height) / 2
// Function to calculate area using base and height
function calculateAreaBaseHeight(base: number, height: number): number {
    return (base * height) / 2;
}

// Function to calculate area using Heron's formula
function calculateAreaHeron(a: number, b: number, c: number): number {
    const s = (a + b + c) / 2; // semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Example usage
const area1 = calculateAreaBaseHeight(5, 10);
console.log(`Area using base and height: ${area1}`);

const area2 = calculateAreaHeron(3, 4, 5);
console.log(`Area using Heron's formula: ${area2}`);
