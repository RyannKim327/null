function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array must contain at least one number");
    }
    
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const mean = calculateMean(numbers);
console.log(`The mean is: ${mean}`);
