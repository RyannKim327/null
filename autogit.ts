function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find the candidate
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

    // Phase 2: Validate the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null; // Return null if no majority element
}

// Test the function
const nums = [3, 2, 3]; // Example array
const result = majorityElement(nums);
console.log(result); // Output: 3
function majorityElementWithMap(nums: number[]): number | null {
    const countMap = new Map<number, number>();
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        const count = (countMap.get(num) || 0) + 1;
        countMap.set(num, count);

        if (count > majorityCount) {
            return num; // Early return if we find a majority element
        }
    }

    return null; // Return null if no majority element is found
}

// Test the function
const nums = [2, 2, 1, 1, 1, 2, 2]; // Example array
const result = majorityElementWithMap(nums);
console.log(result); // Output: 2
