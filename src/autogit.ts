function removeDuplicatesUsingSet<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicatesUsingSet(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
function removeDuplicatesUsingFilter<T>(array: T[]): T[] {
    return array.filter((value, index) => array.indexOf(value) === index);
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicatesUsingFilter(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
function removeDuplicatesUsingReduce<T>(array: T[]): T[] {
    return array.reduce<T[]>((acc, current) => {
        if (!acc.includes(current)) {
            acc.push(current);
        }
        return acc;
    }, []);
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicatesUsingReduce(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
function removeDuplicatesUsingForEach<T>(array: T[]): T[] {
    const seen: { [key: string]: boolean } = {};
    const uniqueArray: T[] = [];

    array.forEach((item) => {
        if (!seen[item]) {
            seen[item] = true;
            uniqueArray.push(item);
        }
    });

    return uniqueArray;
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicatesUsingForEach(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
