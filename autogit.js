function mergeSort(array) {
    // Step 2
    if (array.length <= 1) {
        return array;
    }

    // Step 3
    const middle = Math.floor(array.length / 2);

    // Step 4
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    // Step 5
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);

    // Step 6
    return merge(leftSorted, rightSorted);
}

function merge(leftHalf, rightHalf) {
    // Step 7
    let i = 0, j = 0;
    const merged = [];

    // Step 8
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            merged.push(leftHalf[i]);
            i++;
        } else {
            merged.push(rightHalf[j]);
            j++;
        }
    }

    // Step 9
    while (i < leftHalf.length) {
        merged.push(leftHalf[i]);
        i++;
    }

    while (j < rightHalf.length) {
        merged.push(rightHalf[j]);
        j++;
    }

    // Step 10
    return merged;
}

// Step 11
const array = [5, 8, 3, 1, 9, 2];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8, 9]
