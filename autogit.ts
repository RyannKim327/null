function majorityElement(nums: number[]): number {
    let candidate: number | null = null;
    let count = 0;

    // Find candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : -1; // returns -1 if no majority element
}

// Example usage:
const arr = [3, 2, 3];
const result = majorityElement(arr);
console.log(result); // Output: 3
