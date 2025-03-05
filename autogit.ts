function randomSort(arr: number[]): number[] {
    const isSorted = (arr: number[]): boolean => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    };

    let sortedArray = [...arr]; // Create a copy of the original array

    while (!isSorted(sortedArray)) {
        // Shuffle the array randomly
        for (let i = sortedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
        }
    }

    return sortedArray;
}

// Example Usage
const arrayToSort = [5, 3, 8, 1, 4];
const sortedArray = randomSort(arrayToSort);
console.log("Original Array:", arrayToSort);
console.log("Sorted Array:", sortedArray);
