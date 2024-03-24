function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage
let sideA = 5;
let sideB = 6;
let sideC = 7;

let area = calculateTriangleArea(sideA, sideB, sideC);
console.log('The area of the triangle is: ' + area);
