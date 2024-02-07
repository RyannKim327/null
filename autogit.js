function interpolationSearch(arr, target, startIdx = 0) {
    if (startIdx < 0 || startIdx >= arr.length) {
        return -1;
    }

    const endIdx = arr.length - 1;
    let pos = startIdx + Math.floor((target - arr[startIdx]) * (endIdx - startIdx) / (arr[endIdx] - arr[startIdx]));

    if (pos < startIdx || pos > endIdx) {
        return -1;
    }

    if (arr[pos] === target) {
        return pos;
    }

    if (arr[pos] < target) {
        return interpolationSearch(arr, target, pos + 1);
    }

    if (arr[pos] > target) {
        return interpolationSearch(arr, target, startIdx, pos - 1);
    }

    return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const target = 4;
const index = interpolationSearch(arr, target);
console.log(index); // Output: 3
