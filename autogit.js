function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

// Example usage:
const arr = [8, 3, 1, 6, 4, 7, 2, 5];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
