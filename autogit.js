function findSecondLargest(arr) {
    arr.sort(function(a, b){return b - a});
    return arr[1];
}

const arr = [5, 2, 8, 10, 3];
const secondLargest = findSecondLargest(arr);

console.log(secondLargest); // Output: 8
