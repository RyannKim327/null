function findMajorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    // Phase 1: Find a candidate for majority element
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate
    if (candidate !== null) {
        let occurrences = 0;
        for (const num of nums) {
            if (num === candidate) {
                occurrences++;
            }
        }
        if (occurrences > Math.floor(nums.length / 2)) {
            return candidate;
        }
    }

    return null;  // No majority element found
}
