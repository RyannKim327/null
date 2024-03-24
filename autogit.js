function calculateMean(numbers) {
    // Check if the input is an array
    if (!Array.isArray(numbers)) {
        return "Input is not an array";
    }

    // Calculate the sum of all numbers in the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the mean by dividing the sum by the total number of elements
    const mean = sum / numbers.length;

    return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
