function countingSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = new Array(max - min + 1).fill(0);
    let output = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    return output;
}

// Test the countingSort function
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array:", arr);
console.log("Sorted array:", countingSort(arr));
