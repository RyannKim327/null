function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function shuffleArray(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

function bogoSort(arr: number[]): number[] {
    while (!isSorted(arr)) {
        shuffleArray(arr);
    }
    return arr;
}

// Example usage:
const unsortedArray = [3, 1, 4, 2];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = bogoSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Unsorted Array: [3, 1, 4, 2]
Sorted Array: [1, 2, 3, 4]
