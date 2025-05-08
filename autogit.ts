function findMajorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    // Phase 1: Find a candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (candidate !== null && count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        return null; // No majority element found
    }
}
const arr = [2, 2, 1, 1, 1, 2, 2];
const majority = findMajorityElement(arr);
console.log(majority); // Output: 2
