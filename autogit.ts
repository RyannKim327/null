function getMax(arr: number[]): number {
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function countingSort(arr: number[], exp: number): number[] {
    const output: number[] = new Array(arr.length);
    const count: number[] = new Array(10).fill(0);

    // Count occurrences of each digit
    for (const num of arr) {
        const index = Math.floor(num / exp) % 10;
        count[index]++;
    }

    // Update count[i] so it contains actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    return output;
}

function radixSort(arr: number[]): number[] {
    // Find the maximum number to know the number of digits
    const max = getMax(arr);

    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        arr = countingSort(arr, exp);
    }

    return arr;
}

// Usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr);
