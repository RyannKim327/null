function secondLargest(arr: number[]): number | null {
    // Step 1: Remove duplicates
    const uniqueArr = Array.from(new Set(arr));
    
    // Check if there are fewer than 2 unique numbers
    if (uniqueArr.length < 2) {
        return null; // or throw an error, based on your requirements
    }

    // Step 2: Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);

    // Step 3: Return the second element
    return uniqueArr[1];
}

// Example usage:
const array = [3, 5, 7, 5, 2, 8, 1];
const result = secondLargest(array);
console.log(result); // Output: 7
