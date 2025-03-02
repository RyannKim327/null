function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // First pass to find a candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second pass to validate the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Check if the candidate is the majority element
    if (count > nums.length / 2) {
        return candidate;
    } else {
        return null; // No majority element
    }
}

// Example usage:
const arr = [3, 2, 3];
const result = majorityElement(arr);
console.log(result); // Output: 3
function majorityElement(nums: number[]): number | null {
    const countMap: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }

        // Check if the current number is the majority element
        if (countMap[num] > majorityCount) {
            return num;
        }
    }

    return null; // No majority element
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(arr);
console.log(result); // Output: 2
