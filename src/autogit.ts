// Function to calculate the mean of an array of numbers
function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        // Handle empty array case
        throw new Error("Cannot calculate the mean of an empty array.");
        // Alternatively, you could return NaN or 0 based on your requirements
        // return NaN;
        // return 0;
    }

    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    const mean = sum / numbers.length;
    return mean;
}

// Example usage
const numberList1: number[] = [10, 20, 30, 40, 50];
const numberList2: number[] = [5, 15, 25];
const emptyList: number[] = [];

try {
    console.log(`Mean of numberList1: ${calculateMean(numberList1)}`); // Output: 30
    console.log(`Mean of numberList2: ${calculateMean(numberList2)}`); // Output: 15
    console.log(`Mean of emptyList: ${calculateMean(emptyList)}`);
} catch (error) {
    console.error(error.message); // Output: Cannot calculate the mean of an empty array.
}
function calculateMeanWithLoop(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate the mean of an empty array.");
    }

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

// Example usage
console.log(`Mean using loop: ${calculateMeanWithLoop([8, 16, 24])}`); // Output: 16
