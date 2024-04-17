function calculateTriangleArea(sideA, sideB, sideC) {
    // Calculate the semi-perimeter of the triangle
    var s = (sideA + sideB + sideC) / 2;

    // Calculate the area using Heron's formula
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    return area;
}

// Example usage
var sideA = 3;
var sideB = 4;
var sideC = 5;
var area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
