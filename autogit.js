function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add the remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add the remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
function findMedian(arr) {
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

// Example usage
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const mergedArray = mergeSortedArrays(arr1, arr2);
const median = findMedian(mergedArray);

console.log("Median:", median);
