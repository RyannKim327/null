function bubbleSort(arr: number[]): number[] {
    let n: number = arr.length;
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
        // Decrease n because the last element is in correct position
        n--;
    } while (swapped);

    return arr;
}

// Example usage
const numbers: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]
