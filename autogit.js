function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage
let a = 5;
let b = 6;
let c = 7;
let area = calculateTriangleArea(a, b, c);
console.log('The area of the triangle is: ' + area);
