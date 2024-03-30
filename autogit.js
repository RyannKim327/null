function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Create an array of subarrays, each containing a single element
    var subArrays = arr.map(item => [item]);

    // Merge adjacent subarrays until there is only one subarray left
    while (subArrays.length > 1) {
        var newSubArrays = [];
        for (var i = 0; i < subArrays.length; i += 2) {
            if (i + 1 < subArrays.length) {
                newSubArrays.push(merge(subArrays[i], subArrays[i + 1]));
            } else {
                newSubArrays.push(subArrays[i]);
            }
        }
        subArrays = newSubArrays;
    }

    return subArrays[0];
}

function merge(arr1, arr2) {
    var result = [];
    var i = 0;
    var j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add the remaining elements from both arrays (if any)
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Example usage
var arr = [38, 27, 43, 3, 9, 82, 10];
var sortedArr = mergeSort(arr);
console.log(sortedArr);
