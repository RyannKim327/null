Area = √(s * (s - a) * (s - b) * (s - c))
function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    var s = (a + b + c) / 2;

    // Calculate the area using Heron's Formula
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage
var sideA = 5;
var sideB = 6;
var sideC = 7;

var area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
