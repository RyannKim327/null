function calculateMean(numbers: number[]): number {
    // Function implementation will go here
}
function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate the mean of an empty array.");
    }
    // Continue with calculation
}
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
const mean = sum / numbers.length;
/**
 * Calculates the mean (average) of an array of numbers.
 * 
 * @param numbers - An array of numbers.
 * @returns The mean of the numbers.
 * @throws Will throw an error if the input array is empty.
 */
function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate the mean of an empty array.");
    }

    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    const mean = sum / numbers.length;

    return mean;
}
const data: number[] = [10, 20, 30, 40, 50];
try {
    const mean = calculateMean(data);
    console.log(`The mean is: ${mean}`); // Output: The mean is: 30
} catch (error) {
    console.error(error.message);
}

// Example with an empty array
const emptyData: number[] = [];
try {
    const mean = calculateMean(emptyData);
    console.log(`The mean is: ${mean}`);
} catch (error) {
    console.error(error.message); // Output: Cannot calculate the mean of an empty array.
}
const calculateMean = (numbers: number[]): number => {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate the mean of an empty array.");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};
function calculateMean<T extends number | bigint>(numbers: T[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate the mean of an empty array.");
    }

    // Ensure all elements are of the same type
    if (!numbers.every(num => typeof num === typeof numbers[0])) {
        throw new Error("All elements in the array must be of the same type.");
    }

    const sum = numbers.reduce((acc, num) => {
        if (typeof num === "bigint") {
            return (acc as bigint) + (num as bigint);
        } else {
            return (acc as number) + (num as number);
        }
    }, typeof numbers[0] === "bigint" ? BigInt(0) : 0);

    const mean = Number(sum) / numbers.length;
    return mean;
}
