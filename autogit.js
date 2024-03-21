function findSecondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

// Test the function
let array = [10, 20, 5, 15];
console.log("Second largest element is: ", findSecondLargest(array));
