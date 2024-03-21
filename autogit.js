function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example: Calculate the area of a triangle with side lengths 3, 4, and 5
let area = calculateTriangleArea(3, 4, 5);
console.log("The area of the triangle is: " + area);
