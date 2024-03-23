function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        let slope = (high - low) / (arr[high] - arr[low]);
        let index = low + Math.floor((target - arr[low]) * slope);

        if (arr[index] === target) {
            return index;
        }

        if (arr[index] < target) {
            low = index + 1;
        } else {
            high = index - 1;
        }
    }

    return -1; // Return -1 if the target is not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const index = interpolationSearch(arr, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log('Element not found');
}
