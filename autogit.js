function countingSort(arr) {
    let max = Math.max(...arr);
    let countArr = new Array(max + 1).fill(0);
    let sortedArr = [];

    // Count occurrences of each element
    arr.forEach(num => {
        countArr[num]++;
    });

    // Build sorted array
    countArr.forEach((count, num) => {
        for (let i = 0; i < count; i++) {
            sortedArr.push(num);
        }
    });

    return sortedArr;
}

// Example usage
const unsortedArray = [3, 1, 6, 2, 4, 3, 0];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);
