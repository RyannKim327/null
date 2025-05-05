function findMax(arr: number[]): number {
    return Math.max(...arr);
}

const numbers = [3, 5, 1, 8, 2];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 8
function findMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [3, 5, 1, 8, 2];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 8
function findMax(arr: number[]): number {
    return arr.reduce((max, current) => Math.max(max, current), arr[0]);
}

const numbers = [3, 5, 1, 8, 2];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 8
function findMax(arr: number[]): number | null {
    if (arr.length === 0) {
        return null; // or throw an error, or return undefined
    }
    return Math.max(...arr);
}

const numbers: number[] = [];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: null
