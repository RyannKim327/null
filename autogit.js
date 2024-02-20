function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage
const a = 5;
const b = 6;
const c = 7;
const area = calculateTriangleArea(a, b, c);
console.log("The area of the triangle is: " + area);
