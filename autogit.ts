function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

// Example usage:
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr: number[]): number[] {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Example usage:
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr: number[]): number[] {
    return arr.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, [] as number[]);
}

// Example usage:
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
