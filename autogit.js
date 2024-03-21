function mergeSortIterative(arr) {
    if (arr.length < 2) {
        return arr;
    }
    
    const n = arr.length;
    const stepSize = 1;
    
    while (stepSize < n) {
        let left = 0;
        
        while (left + stepSize < n) {
            merge(arr, left, stepSize);
            left += stepSize * 2;
        }
        
        stepSize *= 2;
    }
    
    return arr;
}

function merge(arr, left, stepSize) {
    const mid = left + stepSize;
    const right = Math.min(left + 2 * stepSize, arr.length);
    const merged = [];
    let i = left;
    let j = mid;
    
    while (i < mid && j < right) {
        if (arr[i] < arr[j]) {
            merged.push(arr[i]);
            i++;
        } else {
            merged.push(arr[j]);
            j++;
        }
    }
    
    while (i < mid) {
        merged.push(arr[i]);
        i++;
    }
    
    while (j < right) {
        merged.push(arr[j]);
        j++;
    }
    
    for (let k = 0; k < merged.length; k++) {
        arr[left + k] = merged[k];
    }
}
