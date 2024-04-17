function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    var uniqueArr = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });

    return uniqueArr[1];
}

var arr = [5, 2, 8, 10, 7, 3];
var secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 8
