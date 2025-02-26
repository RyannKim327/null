function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function randomSort(arr: number[]): number[] {
    while (!isSorted(arr)) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    return arr;
}

// Example usage
const randomArray = [5, 3, 8, 4, 2];
const sortedArray = randomSort(randomArray);
console.log(sortedArray);
