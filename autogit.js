Area = sqrt(s * (s - a) * (s - b) * (s - c))
function calculateTriangleArea(a, b, c) {
    // Calculate semi-perimeter
    var s = (a + b + c) / 2;

    // Calculate area using Heron's formula
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Test the function
var sideA = 5;
var sideB = 6;
var sideC = 7;
var area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
