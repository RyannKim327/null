function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

let array = [10, 5, 20, 8, 15];
let secondLargest = findSecondLargest(array);

console.log("Second Largest Element: " + secondLargest);
