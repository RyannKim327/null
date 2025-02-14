function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest; // Update second largest
            largest = num;          // Update largest
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;   // Update second largest
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // In case all elements are equal
}

// Example usage:
const numbers = [3, 1, 4, 4, 5, 2];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 4
