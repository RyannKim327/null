function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort each half
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements in left or right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
