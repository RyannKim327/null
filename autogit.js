function shellSort(arr) {
    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage:
const array = [9, 7, 5, 1, 3, 8, 2, 6, 4];
console.log(shellSort(array));
