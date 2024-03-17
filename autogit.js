// Function to find the maximum number in an array
function findMax(arr) {
    let max = arr[0];
    arr.forEach(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

// Function to perform counting sort based on the digit placement
function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Radix Sort function
function radixSort(arr) {
    const max = findMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

// Example usage
const array = [170, 45, 75, 90, 802, 2, 24, 66];
console.log("Array before sorting:");
console.log(array);

const sortedArray = radixSort(array);
console.log("Array after sorting:");
console.log(sortedArray);
