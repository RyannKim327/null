function countingSort(arr) {
    const max = Math.max(...arr);
    const countArray = new Array(max + 1).fill(0);

    arr.forEach(num => countArray[num]++);
  
    let sortedIndex = 0; // Index for sorted array
    countArray.forEach((count, num) => {
        while (count > 0) {
            arr[sortedIndex++] = num;
            count--;
        }
    });

    return arr;
}

// Example usage
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
