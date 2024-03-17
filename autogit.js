function calculateTriangleArea(a, b, c) {
    // calculate semi-perimeter
    const s = (a + b + c) / 2;
    
    // calculate area
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Example usage
const a = 3;
const b = 4;
const c = 5;
const area = calculateTriangleArea(a, b, c);

console.log('The area of the triangle is: ' + area);
