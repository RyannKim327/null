/**
 * Calculates the mean (average) of an array of numbers.
 *
 * @param numbers - An array of numbers.
 * @returns The mean of the numbers. Returns NaN if the array is empty.
 */
function calculateMean(numbers: number[]): number {
    // Check if the array is empty
    if (numbers.length === 0) {
        console.warn("The array is empty. Mean is undefined.");
        return NaN; // Return Not-a-Number for empty arrays
    }

    // Calculate the sum of the numbers
    const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the mean
    const mean = total / numbers.length;

    return mean;
}

// Example Usage:
const data: number[] = [10, 20, 30, 40, 50];
const mean = calculateMean(data);
console.log(`The mean is: ${mean}`); // Output: The mean is: 30
function calculateMeanSafe(numbers: any[]): number {
    // Filter out non-numeric values
    const numericValues = numbers.filter(value => typeof value === 'number');

    if (numericValues.length === 0) {
        console.warn("No numeric values found. Mean is undefined.");
        return NaN;
    }

    const total = numericValues.reduce((acc, val) => acc + val, 0);
    const mean = total / numericValues.length;

    return mean;
}

// Example Usage with Mixed Data:
const mixedData = [10, '20', 30, null, 40, undefined, 50];
const safeMean = calculateMeanSafe(mixedData);
console.log(`The safe mean is: ${safeMean}`); // Output: The safe mean is: 30
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function calculateMeanWithTypeGuard(numbers: any[]): number | null {
    const numericValues = numbers.filter(isNumber);

    if (numericValues.length === 0) {
        console.warn("No numeric values found. Mean cannot be calculated.");
        return null; // Alternatively, you can return NaN or throw an error
    }

    const total = numericValues.reduce((acc, val) => acc + val, 0);
    return total / numericValues.length;
}

// Example Usage:
const arrayWithNonNumbers = [15, 'text', 25, false, 35];
const guardedMean = calculateMeanWithTypeGuard(arrayWithNonNumbers);
if (guardedMean !== null) {
    console.log(`The guarded mean is: ${guardedMean}`); // Output: The guarded mean is: 25
} else {
    console.log("Could not calculate mean due to lack of numeric data.");
}
