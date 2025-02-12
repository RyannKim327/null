function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Avoid division by zero
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low; // Found at index low
            }
            return -1; // Not found
        }

        // Estimate the position of the target value
        const position = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the target is found
        if (arr[position] === target) {
            return position;
        }

        // If the target is greater, narrow down to the right side
        if (arr[position] < target) {
            low = position + 1;
        } else {
            // If the target is smaller, narrow down to the left side
            high = position - 1;
        }
    }

    return -1; // Not found
}

// Example Usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue = 70;
const index = interpolationSearch(sortedArray, targetValue);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found in array.');
}
