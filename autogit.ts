const removeDuplicates = (arr: number[]): number[] => {
    return Array.from(new Set(arr));
};

const array = [1, 2, 3, 2, 1, 4];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const removeDuplicates = (arr: number[]): number[] => {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};

const array = [1, 2, 3, 2, 1, 4];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const removeDuplicates = (arr: number[]): number[] => {
    return arr.reduce((accumulator: number[], current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
};

const array = [1, 2, 3, 2, 1, 4];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
