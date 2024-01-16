function shellSort(array) {
    let gap = Math.floor(array.length / 2);

    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];

            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }

            array[j] = temp;
        }

        gap = gap >> 1;
    }

    return array;
}

// Example usage:
const unsortedArray = [5, 1, 4, 2, 8];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray);
