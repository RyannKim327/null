function countingSort(arr) {
    let max = Math.max(...arr);
    let count = Array(max + 1).fill(0);
    let result = [];

    for (let num of arr) {
        count[num]++;
    }

    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }

    return result;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
