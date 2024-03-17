function shellSort(arr) {
    let increment = Math.floor(arr.length / 2);
    
    while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j -= increment;
            }

            arr[j] = temp;
        }

        increment = Math.floor(increment / 2);
    }

    return arr;
}

// Example usage
const arr = [8, 3, 9, 5, 1, 2, 7, 4, 6];
console.log(shellSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
