function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function shuffleArray(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function randomSort(arr: number[]): number[] {
    let shuffledArr = [...arr]; // Create a copy of the array
    while (!isSorted(shuffledArr)) {
        shuffleArray(shuffledArr);
    }
    return shuffledArr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = randomSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
