function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    function merge(left, right) {
        let sorted = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sorted.push(left.shift());
            } else {
                sorted.push(right.shift());
            }
        }
        return sorted.concat(left.slice().concat(right.slice()));
    }

    let sortedArray = arr.map((item) => [item]);

    while (sortedArray.length > 1) {
        let result = [];
        for (let i = 0; i < sortedArray.length; i += 2) {
            if (i + 1 < sortedArray.length) {
                result.push(merge(sortedArray[i], sortedArray[i + 1]));
            } else {
                result.push(sortedArray[i]);
            }
        }
        sortedArray = result;
    }

    return sortedArray[0];
}

// Test the mergeSort function
let arr = [8, 3, 1, 7, 0, 10, 2];
console.log(mergeSort(arr));
