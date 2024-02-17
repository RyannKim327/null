function interpolationSearch(array, value) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && value >= array[low] && value <= array[high]) {
        let position = low + Math.floor(((value - array[low]) * (high - low)) / (array[high] - array[low]));

        if (array[position] === value) {
            return position;
        }

        if (array[position] < value) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    return -1;
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const value = 7;
const index = interpolationSearch(array, value);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
