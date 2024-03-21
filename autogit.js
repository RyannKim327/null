function countingSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = Array(max - min + 1).fill(0);
    let output = [];

    for (let num of arr) {
        count[num - min]++;
    }

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            output.push(i + min);
            count[i]--;
        }
    }

    return output;
}

// Example Usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
