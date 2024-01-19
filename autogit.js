function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {
        if (low === high) {
            if (array[low] === target) {
                return low;
            }
            return -1; // Element not found
        }

        // Estimate the position of the target value
        let position = Math.floor(low + ((target - array[low]) * (high - low)) / (array[high] - array[low]));

        if (array[position] === target) {
            return position;
        }

        if (array[position] < target) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    return -1; // Element not found
}
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const resultIndex = interpolationSearch(array, target);
if (resultIndex !== -1) {
    console.log(`Element ${target} found at index ${resultIndex}`);
} else {
    console.log(`Element ${target} not found in the array`);
}
