function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right indices
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move the left index to the right and the right index to the left
        left++;
        right--;
    }

    return arr;
}

let array = [1, 2, 3, 4, 5];
console.log("Original Array: " + array);

let reversedArray = reverseArray(array);
console.log("Reversed Array: " + reversedArray);
