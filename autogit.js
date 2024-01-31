function shellSort(array) {
    let gap = Math.floor(array.length / 2);
    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i;
            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return array;
}

// Example usage:
const arr = [7, 2, 9, 10, 1, 5];
console.log(shellSort(arr)); // Output: [1, 2, 5, 7, 9, 10]
