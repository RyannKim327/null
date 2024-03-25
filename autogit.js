function countingSort(arr, max) {
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);

    for (let num of arr) {
        count[num]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let num of arr) {
        output[count[num] - 1] = num;
        count[num]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr);
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
