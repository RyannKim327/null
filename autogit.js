function countingSort(arr) {
    const max = Math.max(...arr);
    const countArray = new Array(max + 1).fill(0);

    for (let num of arr) {
        countArray[num]++;
    }

    let result = [];
    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            result.push(i);
            countArray[i]--;
        }
    }

    return result;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
