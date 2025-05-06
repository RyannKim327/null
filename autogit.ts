function findMajorityElement(nums: number[]): number | null {
    const counts: {[key: number]: number} = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > majorityCount) {
            return num;
        }
    }

    return null;  // no majority element found
}
function findMajorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify candidate is actually majority
    if (candidate !== null) {
        const occurrence = nums.filter(x => x === candidate).length;
        if (occurrence > Math.floor(nums.length / 2)) {
            return candidate;
        }
    }

    return null;
}
