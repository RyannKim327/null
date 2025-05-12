function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                // Swap the elements
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        // Each pass places the largest element at the end,
        // so we can reduce the range by 1
        n--;
    } while (swapped);

    return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2]));
// Output: [2, 3, 4, 5, 8]
