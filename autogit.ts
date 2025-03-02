function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null; // Not enough elements for a second largest
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num < firstLargest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Handle case where no second largest found
}

// Example usage:
const numbers = [3, 1, 4, 4, 5, 2];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 4
