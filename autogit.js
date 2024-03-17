area = √(s * (s - a) * (s - b) * (s - c))
s = (a + b + c) / 2
function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage
let sideA = 5;
let sideB = 6;
let sideC = 7;
let triangleArea = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + triangleArea);
