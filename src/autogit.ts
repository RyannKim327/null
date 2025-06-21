function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function shuffleArray(arr: number[]): number[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
}

function bogoSort(arr: number[]): number[] {
    let attempts = 0;
    while (!isSorted(arr)) {
        arr = shuffleArray(arr);
        attempts++;
        console.log(`Attempt ${attempts}: ${arr}`);
    }
    console.log(`Sorted after ${attempts} attempts.`);
    return arr;
}

// Example usage:
const unsortedArray = [3, 1, 4, 2];
console.log("Original array:", unsortedArray);

const sortedArray = bogoSort(unsortedArray);
console.log("Sorted array:", sortedArray);
Original array: [3, 1, 4, 2]
Attempt 1: [4, 3, 2, 1]
Attempt 2: [2, 4, 1, 3]
Attempt 3: [1, 2, 3, 4]
Sorted after 3 attempts.
Sorted array: [1, 2, 3, 4]
