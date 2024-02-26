function mergeSortIterative(arr) {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push([i, i]);
    }
    
    while (stack.length > 1) {
        const left1 = stack.pop();
        const left2 = stack.pop();
        stack.push(merge(arr, left1[0], left1[1], left2[0], left2[1]));
    }

    return arr;
}

function merge(arr, start1, end1, start2, end2) {
    const merged = [];
    let index = 0;
    let i = start1;
    let j = start2;
    
    while (i <= end1 && j <= end2) {
        if (arr[i] <= arr[j]) {
            merged[index++] = arr[i++];
        } else {
            merged[index++] = arr[j++];
        }
    }

    while (i <= end1) {
        merged[index++] = arr[i++];
    }

    while (j <= end2) {
        merged[index++] = arr[j++];
    }

    for (let k = start1, l = 0; k <= end2; k++, l++) {
        arr[k] = merged[l];
    }

    return [start1, end2];
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
mergeSortIterative(arr);
console.log("Sorted array:", arr);
