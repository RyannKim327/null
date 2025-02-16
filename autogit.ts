function findMaxValue(arr: number[]): number | undefined {
    return arr.length > 0 ? Math.max(...arr) : undefined;
}

const numbers = [1, 3, 5, 2, 4];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 5
