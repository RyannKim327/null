function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap adjacent elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // After each pass, the largest element is bubbled to the end
    } while (swapped);

    return arr;
}
const unsortedArray = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(unsortedArray)); // [1, 2, 5, 5, 6, 9]
