function findSecondLargest(arr) {
    arr.sort(function(a, b) { return b - a; });
    return arr[1];
}

const array = [10, 20, 5, 15];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 15
