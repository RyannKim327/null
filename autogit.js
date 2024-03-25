Area = √(s * (s - a) * (s - b) * (s - c))
function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Usage example
let sideA = 5;
let sideB = 6;
let sideC = 7;

let area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
