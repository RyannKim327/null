function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
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
const arrayToSort = [12, 34, 7, 23, 32, 5, 62];
console.log("Original array:", arrayToSort);
console.log("Sorted array:", shellSort(arrayToSort));
