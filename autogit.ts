function findMajorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify if candidate is actually the majority element
    if (candidate !== null) {
        let occurrence = 0;
        for (const num of nums) {
            if (num === candidate) {
                occurrence++;
            }
        }
        if (occurrence > Math.floor(nums.length / 2)) {
            return candidate;
        }
    }

    return null; // No majority element
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
