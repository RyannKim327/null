function mergeSort<T>(arr: T[]): T[] {
    // Base case: if array has 1 or fewer elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point to divide the array
    const middle = Math.floor(arr.length / 2);

    // Split the array into left and right halves
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort both halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
    let result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// Custom comparator
const sortedPeople = mergeSort(people, (a, b) => a.age - b.age);
