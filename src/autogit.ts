function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Optionally verify if the candidate is indeed the majority element
    const totalCount = nums.filter(n => n === candidate).length;
    if (totalCount > Math.floor(nums.length / 2)) {
        return candidate!;
    } else {
        throw new Error("No majority element found");
    }
}

// Example usage:
const arr = [3, 2, 3];
console.log(majorityElement(arr)); // Output: 3
function majorityElement(nums: number[]): number {
    const counts: { [key: number]: number } = {};

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > Math.floor(nums.length / 2)) {
            return num;
        }
    }

    throw new Error("No majority element found");
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr)); // Output: 2
function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

// Example usage:
const arr = [6, 5, 5];
console.log(majorityElement(arr)); // Output: 5
function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify if the candidate is indeed the majority element
    const totalCount = nums.filter(n => n === candidate).length;
    if (totalCount > Math.floor(nums.length / 2)) {
        return candidate!;
    } else {
        throw new Error("No majority element found");
    }
}

// Example usage:
const arr1 = [3, 2, 3];
console.log(majorityElement(arr1)); // Output: 3

const arr2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr2)); // Output: 2

const arr3 = [1];
console.log(majorityElement(arr3)); // Output: 1
3
2
1
