function shellSort(arr) {
    let increment = Math.floor(arr.length / 2);

    while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        increment = Math.floor(increment / 2);
    }

    return arr;
}

// Test the shellSort function
let arr = [12, 34, 54, 2, 3];
console.log("Original Array: ", arr);
arr = shellSort(arr);
console.log("Sorted Array: ", arr);
