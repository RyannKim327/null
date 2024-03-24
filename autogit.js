function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;
    
    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
}

// Example usage
let sideA = 3;
let sideB = 4;
let sideC = 5;
let area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
