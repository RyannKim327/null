function countingSort(arr) {
    const max = Math.max(...arr);
    const counts = new Array(max + 1).fill(0);
    const sorted = [];

    for (let num of arr) {
        counts[num]++;
    }

    for (let i = 0; i < counts.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            sorted.push(i);
        }
    }

    return sorted;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr);  // Output: [1, 2, 2, 3, 3, 4, 8]
