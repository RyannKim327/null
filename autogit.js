function countingSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = Array(max - min + 1).fill(0);
    let output = Array(arr.length);

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

    return output;
}

// Example usage
let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr);  // Output: [1, 2, 2, 3, 3, 4, 8]
