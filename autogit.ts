function interpolationSearch(arr: number[], x: number): number {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
        // Calculate the position using interpolation formula
        if (lo === hi) {
            if (arr[lo] === x) return lo;
            return -1;
        }

        const pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));

        // Check if x is present at pos
        if (arr[pos] === x) {
            return pos;
        }

        // If x is greater, ignore left half
        if (arr[pos] < x) {
            lo = pos + 1;
        } 
        // If x is smaller, ignore right half
        else {
            hi = pos - 1;
        }
    }
    return -1; // Element is not present
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const x = 50;
const index = interpolationSearch(arr, x);
console.log(index); // Output: 4
