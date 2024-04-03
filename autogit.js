function countingSort(array) {
    const max = Math.max(...array);
    const countArray = new Array(max + 1).fill(0);
    
    array.forEach(num => {
        countArray[num]++;
    });
    
    let sortedIndex = 0;
    countArray.forEach((count, num) => {
        while (count > 0) {
            array[sortedIndex++] = num;
            count--;
        }
    });

    return array;
}

// Example usage:
const array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array)); // Output: [1, 2, 2, 3, 3, 4, 8]
