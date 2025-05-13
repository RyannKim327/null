function bubbleSort(arr: number[]): number[] {
    // Make a copy to avoid mutating the input array
    let sortedArr = [...arr];
    let n = sortedArr.length;
    let swapped: boolean;
    
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (sortedArr[i - 1] > sortedArr[i]) {
                // Swap elements
                [sortedArr[i - 1], sortedArr[i]] = [sortedArr[i], sortedArr[i - 1]];
                swapped = true;
            }
        }
        // Each pass places the next largest element at the end,
        // so we can reduce the range for the next pass
        n--;
    } while (swapped);

    return sortedArr;
}
const array = [5, 3, 8, 4, 2];
const sorted = bubbleSort(array);
console.log(sorted); // Output: [2, 3, 4, 5, 8]
