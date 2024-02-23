function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const count = Array(max - min + 1).fill(0);
    const output = [];

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

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr);
