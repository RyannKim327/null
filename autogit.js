function calculateTriangleArea(side1, side2, side3) {
    // Calculate the semi-perimeter
    let s = (side1 + side2 + side3) / 2;
    
    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    
    return area;
}

// Example usage
let side1 = 3;
let side2 = 4;
let side3 = 5;
let area = calculateTriangleArea(side1, side2, side3);
console.log("The area of the triangle is: " + area);
