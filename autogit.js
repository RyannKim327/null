function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const merge = (left, right) => {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    };

    let sortedArrays = arr.map(item => [item]);

    while (sortedArrays.length > 1) {
        let mergedArrays = [];

        for (let i = 0; i < sortedArrays.length; i += 2) {
            if (i + 1 < sortedArrays.length) {
                mergedArrays.push(merge(sortedArrays[i], sortedArrays[i + 1]));
            } else {
                mergedArrays.push(sortedArrays[i]);
            }
        }

        sortedArrays = mergedArrays;
    }

    return sortedArrays[0];
}

// Example usage
const arr = [3, 5, 1, 4, 2, 6];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5, 6]
