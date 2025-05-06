function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the index of the minimum element in the remaining unsorted array
        let minIndex: number = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;  // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            const temp: number = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage
const arr: number[] = [29, 10, 14, 37, 13];
console.log("Unsorted array:", arr);
const sortedArr: number[] = selectionSort(arr);
console.log("Sorted array:", sortedArr);
