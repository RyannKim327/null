const removeDuplicates = (array: any[]): any[] => {
    return Array.from(new Set(array));
};

const myArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const removeDuplicates = (array: any[]): any[] => {
    return array.filter((item, index) => array.indexOf(item) === index);
};

const myArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const removeDuplicates = (array: any[]): any[] => {
    return array.reduce((accumulator: any[], current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
};

const myArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
