Area = √(s * (s - a) * (s - b) * (s - c))
s = (a + b + c) / 2
function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage
let side1 = 3;
let side2 = 4;
let side3 = 5;

let area = calculateTriangleArea(side1, side2, side3);
console.log("Area of the triangle is: " + area);
