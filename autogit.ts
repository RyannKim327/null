function selectionSort(arr: number[]): number[] {
    // Make a copy if you want to avoid mutating the original array
    const array = [...arr];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the min is the first element in unsorted part
        let minIndex = i;

        // Check through the rest of the array to find the true min
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap if minIndex isn't the current i
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;
}
