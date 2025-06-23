/**
 * Calculates the mean (average) of a list of numbers.
 * 
 * @param numbers - An array of numbers.
 * @returns The mean of the numbers or `null` if the array is empty.
 */
function calculateMean(numbers: number[]): number | null {
    const count = numbers.length;

    // Handle empty array to avoid division by zero
    if (count === 0) {
        return null;
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const mean = sum / count;
    return mean;
}

// Example Usage:
const dataPoints: number[] = [10, 20, 30, 40, 50];
const mean = calculateMean(dataPoints);

if (mean !== null) {
    console.log(`The mean is: ${mean}`);
} else {
    console.log("Cannot calculate the mean of an empty list.");
}
function calculateMeanWithLoop(numbers: number[]): number | null {
    const count = numbers.length;

    if (count === 0) {
        return null;
    }

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    return sum / count;
}

// Example Usage:
const dataPointsLoop: number[] = [5, 15, 25, 35, 45];
const meanLoop = calculateMeanWithLoop(dataPointsLoop);

if (meanLoop !== null) {
    console.log(`The mean using loop is: ${meanLoop}`);
} else {
    console.log("Cannot calculate the mean of an empty list using loop.");
}
