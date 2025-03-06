function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

// Example usage
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr: number[]): number[] {
    const seen: { [key: number]: boolean } = {};
    return arr.filter(item => {
        if (seen[item]) {
            return false;
        }
        seen[item] = true;
        return true;
    });
}

// Example usage
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
