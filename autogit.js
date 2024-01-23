function binarySearch(arr, target) {
    // implementation goes here
}
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    // implementation goes here
}
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        // implementation goes here
    }
}
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midValue = arr[mid];
        // implementation goes here
    }
}
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midValue = arr[mid];

        if (midValue === target) {
            return mid;
        }
        // implementation goes here
    }

    // target value not found
    return -1;
}
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    // target value not found
    return -1;
}
