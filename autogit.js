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

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSortIterative(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let sortedArr = arr.map(item => [item]);

    while (sortedArr.length > 1) {
        let nextSortArr = [];
        for (let i = 0; i < sortedArr.length; i += 2) {
            if (i + 1 < sortedArr.length) {
                nextSortArr.push(merge(sortedArr[i], sortedArr[i + 1]));
            } else {
                nextSortArr.push(sortedArr[i]);
            }
        }
        sortedArr = nextSortArr;
    }

    return sortedArr[0];
}

// Example usage
const arr = [5, 3, 8, 6, 2, 7, 1, 4];
console.log(mergeSortIterative(arr));
