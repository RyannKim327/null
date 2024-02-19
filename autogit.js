function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Split the input array into smaller arrays
    let splitArrays = array.map(value => [value]);

    // Merge adjacent arrays until only one array remains
    while (splitArrays.length > 1) {
        let mergedArray = [];
        for (let i = 0; i < splitArrays.length; i += 2) {
            let merged = merge(splitArrays[i], splitArrays[i + 1]);
            mergedArray.push(merged);
        }
        splitArrays = mergedArray;
    }

    return splitArrays[0];
}

function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Concatenate the remaining elements
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Example usage
const array = [8, 3, 6, 2, 5, 4, 7, 1];
console.log(mergeSort(array));
