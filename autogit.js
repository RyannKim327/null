function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n/2);

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

// Usage
let arr = [12, 34, 54, 2, 3];
console.log("Original Array:");
console.log(arr);

console.log("\nSorted Array:");
arr = shellSort(arr);
console.log(arr);
