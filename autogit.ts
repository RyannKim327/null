function findMajorityElement(nums: number[]): number | null {
    const counts: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > majorityCount) {
            return num;
        }
    }
    // If no majority element exists
    return null;
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
        let occurrence = 0;
        for (const num of nums) {
            if (num === candidate) occurrence++;
        }
        if (occurrence > Math.floor(nums.length / 2)) {
            return candidate;
        }
    }

    return null;
}
