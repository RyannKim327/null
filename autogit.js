function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {
        if (low == high) {
            if (array[low] === target) return low;
            return -1;
        }

        let pos = low + Math.floor(((target - array[low]) * (high - low) / (array[high] - array[low])));

        if (array[pos] === target) {
            return pos;
        } else if (array[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

// Test the interpolation search
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 16;
const index = interpolationSearch(array, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
