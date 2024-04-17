function mergeSortIterative(arr) {
    if (arr.length < 2) {
        return arr;
    }
    
    const len = arr.length;
    const step = 1;
    let left, right, merged;
    
    for (step; step < len; step *= 2) {
        for (let start = 0; start < len; start += 2 * step) {
            left = arr.slice(start, start + step);
            right = arr.slice(start + step, start + 2 * step);
            merged = merge(left, right);
            arr = arr.slice(0, start).concat(merged, arr.slice(start + 2 * step));
        }
    }
    
    return arr;
}

function merge(left, right) {
    let result = [];
    let il = 0, ir = 0;
    
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    
    return result.concat(left.slice(il)).concat(right.slice(ir));
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
const sortedArr = mergeSortIterative(arr);
console.log("Sorted array:", sortedArr);
