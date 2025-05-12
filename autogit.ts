function majorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

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

    // Optional verification step: check if candidate is actually majority
    if (candidate !== null) {
        const occurrences = nums.filter(num => num === candidate).length;
        if (occurrences > nums.length / 2) {
            return candidate;
        }
    }

    return null; // no majority element found
}

// Usage example:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr));  // Output: 2
