const numbers: number[] = [3, 7, 2, 9, 4];

// Use the spread operator to pass array elements as arguments to Math.max()
const maxValue = Math.max(...numbers);

console.log(`The maximum value is: ${maxValue}`);
The maximum value is: 9
function findMaxValue(numbers: number[]): number | null {
    if (numbers.length === 0) {
        console.error("The array is empty.");
        return null; // Return null or throw an error based on your use case
    }

    return Math.max(...numbers);
}

// Example usage
const numbers: number[] = [3, 7, 2, 9, 4];
const maxValue = findMaxValue(numbers);

if (maxValue !== null) {
    console.log(`The maximum value is: ${maxValue}`);
}
const numbers: number[] = [3, 7, 2, 9, 4];

const maxValue = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]); // Initialize with the first element

console.log(`The maximum value is: ${maxValue}`);
The maximum value is: 9
