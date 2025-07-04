function findSecondLargest(arr: number[]): number | undefined {
    if (arr.length < 2) {
        // Not enough elements to find the second largest
        return undefined;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    // If second is still -Infinity, it means no second largest found
    return second === -Infinity ? undefined : second;
}

// Example usage:
const array = [3, 7, 2, 9, 5];
console.log(findSecondLargest(array)); // Output: 7
