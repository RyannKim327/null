function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {
        let pos = low + Math.floor(((target - array[low]) * (high - low)) / (array[high] - array[low]));

        if (array[pos] === target) {
            return pos;
        } else if (array[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1; // return -1 if target is not found in the array
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = interpolationSearch(array, target);

if (index !== -1) {
    console.log(`Found ${target} at index ${index}`);
} else {
    console.log(`${target} not found in the array`);
}
