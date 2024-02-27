function findMedianSortedArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const totalLength = mergedArray.length;
    
    if (totalLength % 2 === 0) {
        const mid = totalLength / 2;
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        const mid = Math.floor(totalLength / 2);
        return mergedArray[mid];
    }
}

// Example arrays
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5
