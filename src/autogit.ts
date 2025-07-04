function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find a candidate for the majority element
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

    // Phase 2: Verify that the candidate is indeed the majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(arr);
if (result !== null) {
    console.log(`The majority element is: ${result}`);
} else {
    console.log("No majority element found.");
}
