function mergeSortIterative(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let len = arr.length;
    let width = 1;
    let sortedArr = arr.slice();

    while (width < len) {
        for (let i = 0; i < len; i += width * 2) {
            merge(sortedArr, i, Math.min(i + width, len), Math.min(i + width * 2, len));
        }
        width *= 2;
    }

    return sortedArr;
}

function merge(arr, start, mid, end) {
    let result = [];
    let leftIndex = start;
    let rightIndex = mid;

    while (leftIndex < mid && rightIndex < end) {
        if (arr[leftIndex] < arr[rightIndex]) {
            result.push(arr[leftIndex]);
            leftIndex++;
        } else {
            result.push(arr[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < mid) {
        result.push(arr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < end) {
        result.push(arr[rightIndex]);
        rightIndex++;
    }

    for (let i = start; i < end; i++) {
        arr[i] = result[i - start];
    }
}

// Test the algorithm
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
