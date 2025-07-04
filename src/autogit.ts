function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function randomSort(arr: number[]): number[] {
    // Clone the array to avoid mutating the original
    const result = [...arr];

    while (!isSorted(result)) {
        // Shuffle the array randomly
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]]; // Swap elements
        }
    }
    
    return result;
}

// Example usage
const arr = [5, 3, 8, 1, 2];
const sortedArr = randomSort(arr);
console.log("Sorted Array:", sortedArr);
