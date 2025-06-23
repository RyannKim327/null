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
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function bogosort(arr: number[]): number[] {
    let sortedArray = [...arr];
    while (!isSorted(sortedArray)) {
        sortedArray = shuffleArray(sortedArray);
    }
    return sortedArray;
}

// Example usage:
const unsortedArray = [3, 1, 4, 2, 5];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = bogosort(unsortedArray);
console.log("Sorted Array:", sortedArray);
