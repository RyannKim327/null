function findSecondLargest(arr: number[]): number | undefined {
    if (arr.length < 2) return undefined; // Not enough elements
    
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? undefined : secondLargest;
}

// Example usage:
const arr = [3, 5, 1, 2, 4];
console.log(findSecondLargest(arr)); // Output: 4
