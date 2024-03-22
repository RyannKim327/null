function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {
        if (low === high) {
            if (array[low] === target) {
                return low;
            }
            return -1;
        }

        let position = low + Math.floor(((target - array[low]) * (high - low)) / (array[high] - array[low]));

        if (array[position] === target) {
            return position;
        }

        if (array[position] < target) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    return -1;
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;
const index = interpolationSearch(array, target);

if (index !== -1) {
    console.log(`${target} found at index ${index}`);
} else {
    console.log(`${target} not found in the array`);
}
