Area = sqrt(s * (s - a) * (s - b) * (s - c))
function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;
    
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
}

// Example usage
const a = 5;
const b = 6;
const c = 7;
const area = calculateTriangleArea(a, b, c);
console.log("The area of the triangle is: " + area);
