function countingSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let count = new Array(max - min + 1).fill(0);
    let output = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    return arr;
}

// Example usage
const array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array)); // Output: [1, 2, 2, 3, 3, 4, 8]
