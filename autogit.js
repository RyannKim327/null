let pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));
function interpolationSearch(arr, target, low, high) {
    if (low > high || target < arr[low] || target > arr[high]) {
        return -1;
    }

    let pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));

    if (arr[pos] === target) {
        return pos;
    }

    if (target < arr[pos]) {
        return interpolationSearch(arr, target, low, pos - 1);
    }

    return interpolationSearch(arr, target, pos + 1, high);
}
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let target = 12;
let index = interpolationSearch(arr, target, 0, arr.length - 1);

console.log("Target value found at index:", index);
