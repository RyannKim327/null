function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The list of numbers is empty.");
    }

    const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const mean = total / numbers.length;

    return mean;
}

// Example usage:
const numList = [10, 20, 30, 40, 50];
const mean = calculateMean(numList);
console.log(`The mean is: ${mean}`);
