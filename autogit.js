function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

// Test the function with base = 5 and height = 8
let base = 5;
let height = 8;
let area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);
