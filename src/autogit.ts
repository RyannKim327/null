function isSorted(array: number[]): boolean {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

function shuffle(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function bogosort(array: number[]): number[] {
    while (!isSorted(array)) {
        shuffle(array);
    }
    return array;
}

// Example usage
const arr = [3, 2, 5, 1, 4];
console.log("Original array:", arr);
const sortedArr = bogosort(arr);
console.log("Sorted array:", sortedArr);
