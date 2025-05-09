function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // First pass: find the majority candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Second pass: confirm that the candidate is the majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null; // Return the candidate if it's valid
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(arr);
console.log(result); // Outputs: 2
