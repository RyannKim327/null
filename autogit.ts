function findMaxValue(arr: number[]): number {
    return Math.max(...arr);
}

const numbers = [3, 5, 7, 2, 8, -1];
const maxValue = findMaxValue(numbers);
console.log(maxValue);  // Output: 8
function findMaxValue(arr: number[]): number {
    let max = arr[0];  // Initialize max with the first element
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
