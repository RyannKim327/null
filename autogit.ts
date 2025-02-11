function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Each pass, the largest element is in place
    } while (swapped);

    return arr;
}

// Example usage
const randomArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", randomArray);
const sortedArray = bubbleSort(randomArray);
console.log("Sorted Array:", sortedArray);
