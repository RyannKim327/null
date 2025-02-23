const removeDuplicatesUsingSet = (arr: number[]): number[] => {
    return Array.from(new Set(arr));
};

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicatesUsingSet(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
const removeDuplicatesUsingFilter = (arr: number[]): number[] => {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicatesUsingFilter(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
const removeDuplicatesUsingReduce = (arr: number[]): number[] => {
    return arr.reduce((accumulator: number[], current: number) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
};

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicatesUsingReduce(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
