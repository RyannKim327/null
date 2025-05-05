function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array cannot be empty");
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;
    
    return mean;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const mean = calculateMean(numbers);
console.log(`The mean is: ${mean}`); // Output: The mean is: 30
