function calculateTriangleArea(sideA, sideB, sideC) {
    const semiPerimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    return area;
}

// Example usage
const sideA = 5;
const sideB = 6;
const sideC = 7;
const area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
