function countingSort(arr) {
    const max = Math.max(...arr);
    const counts = Array(max + 1).fill(0);
    const sortedArr = [];

    arr.forEach(num => counts[num]++);

    counts.forEach((count, index) => {
        for (let i = 0; i < count; i++) {
            sortedArr.push(index);
        }
    });

    return sortedArr;
}

// Example usage
const array = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(array);

console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
