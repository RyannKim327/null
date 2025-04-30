// Define an array
const myArray: number[] = [1, 2, 3, 4, 5];

// Reverse the array
myArray.reverse();

// Output the reversed array
console.log(myArray); // Output: [5, 4, 3, 2, 1]
function reverseArray<T>(arr: T[]): T[] {
    const reversed: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const myArray: number[] = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(myArray);

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
