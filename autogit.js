function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr[1];
}

let array = [10, 5, 15, 7, 20];
let secondLargest = findSecondLargest(array);
console.log("Second largest element: " + secondLargest);
