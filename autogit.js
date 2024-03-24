area = √(s(s - a)(s - b)(s - c))
function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage
const sideA = 3;
const sideB = 4;
const sideC = 5;

const area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
