function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function shuffle(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}

function bogosort(arr: number[]): number[] {
    while (!isSorted(arr)) {
        shuffle(arr);
    }
    return arr;
}

// Example usage:
const randomArray: number[] = [5, 3, 8, 1, 2];
console.log("Unsorted array:", randomArray);
const sortedArray = bogosort(randomArray);
console.log("Sorted array:", sortedArray);
