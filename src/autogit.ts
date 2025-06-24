function findMajorityElement(arr: number[]): number | null {
    const frequencyMap: { [key: number]: number } = {};
    const threshold = Math.floor(arr.length / 2);

    // Populate the frequency map
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Find the majority element
    for (const [num, count] of Object.entries(frequencyMap)) {
        if (count > threshold) {
            return parseInt(num); // Convert key back to number
        }
    }

    return null; // No majority element found
}

// Example usage:
const array = [3, 2, 3];
console.log(findMajorityElement(array)); // Output: 3
function findMajorityElement(arr: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Step 1: Find the potential candidate
    for (const num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    // Step 2: Verify the candidate
    count = 0;
    for (const num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(arr.length / 2)) {
        return candidate!;
    }

    return null; // No majority element found
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(array)); // Output: 2
