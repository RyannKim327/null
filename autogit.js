function kthSmallestElement(arr, k) {
    if(k < 1 || k > arr.length) {
        return "Invalid input: k is out of range";
    }
    
    arr.sort(function(a, b) {
        return a - b;
    });
    
    return arr[k - 1];
}

// Example usage
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let k = 3;
console.log(kthSmallestElement(array, k)); // Output: 3
