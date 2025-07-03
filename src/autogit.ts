function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // First pass: find potential candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Verify if the candidate is actually the majority
    if (candidate !== null && nums.filter(n => n === candidate).length > Math.floor(nums.length / 2)) {
        return candidate;
    }

    return null; // if no majority element found
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(array);
console.log(result); // Output: 2
