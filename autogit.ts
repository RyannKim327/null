function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Use floor to get middle index
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // search right half
        } else {
            right = mid - 1; // search left half
        }
    }

    return -1; // target not found
}
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

const index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log(`Found target ${target} at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
