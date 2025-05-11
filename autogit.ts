function majorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    // Phase 1: Find the candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate (optional if the problem guarantees existence)
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}
