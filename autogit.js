function calculateTriangleArea(base, height) {
    var area = 0.5 * base * height;
    return area;
}

var base = 5; // Enter the base length
var height = 8; // Enter the height

var triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);
