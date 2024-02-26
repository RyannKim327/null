function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Return the area
    return area;
}

// Example usage
let a = 3;
let b = 4;
let c = 5;
let area = calculateTriangleArea(a, b, c);
console.log('The area of the triangle is: ' + area);
