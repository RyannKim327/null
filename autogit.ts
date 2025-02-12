function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function randomSort(arr: number[]): number[] {
    let sortedArr = [...arr];
    
    while (!isSorted(sortedArr)) {
        for (let i = sortedArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index
            // Swap sortedArr[i] with the element at random index
            [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
        }
    }
    
    return sortedArr;
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArray = randomSort(arr);
console.log(sortedArray);
