function secondLargest(arr: number[]): number | null {
    // Step 1: Remove duplicates
    const uniqueArr = Array.from(new Set(arr));
    
    // Step 2: Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Step 3: Return the second largest or null if it doesn't exist
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}

// Example usage:
const numbers = [3, 5, 1, 4, 5, 3];
const secondLargestNumber = secondLargest(numbers);
console.log(secondLargestNumber); // Output: 4
function secondLargestEfficient(arr: number[]): number | null {
    let largest: number | null = null;
    let secondLargest: number | null = null;

    for (const num of arr) {
        if (largest === null || num > largest) {
            secondLargest = largest; // Update second largest before largest
            largest = num;
        } else if (num !== largest && (secondLargest === null || num > secondLargest)) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

// Example usage:
const numbers = [3, 5, 1, 4, 5, 3];
const secondLargestNumber = secondLargestEfficient(numbers);
console.log(secondLargestNumber); // Output: 4
