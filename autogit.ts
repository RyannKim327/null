function countingSort(arr: number[], exp: number): number[] {
    const output: number[] = new Array(arr.length).fill(0);
    const count: number[] = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    return output;
}

function getMax(arr: number[]): number {
    return Math.max(...arr);
}

function radixSort(arr: number[]): number[] {
    const max = getMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        arr = countingSort(arr, exp);
    }

    return arr;
}

// Example usage
const unsortedArray: number[] = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray: number[] = radixSort(unsortedArray);
console.log(sortedArray);
