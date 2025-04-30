function findMajorityElement(nums: number[]): number | null {
    const counts = new Map<number, number>();
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
        if (counts.get(num)! > majorityCount) {
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
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Optional verification step if your input might not have a majority element
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
