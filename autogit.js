function countingSort(arr) {
    let max = Math.max(...arr);
    let countArray = new Array(max + 1).fill(0);
    let sortedArray = [];

    arr.forEach(num => {
        countArray[num]++;
    });

    countArray.forEach((count, num) => {
        for (let i = 0; i < count; i++) {
            sortedArray.push(num);
        }
    });

    return sortedArray;
}

// Example usage
let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
