function findMajorityElement(nums: number[]): number | null {
    const counts: { [key: number]: number } = {};
    const n = nums.length;

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        // Early exit if a majority element is found
        if (counts[num] > n / 2) {
            return num;
        }
    }

    // If no majority element found
    return null;
}

// Example usage:
const array = [3, 2, 3];
const majority = findMajorityElement(array);
console.log(majority); // Output: 3
function findMajorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify if the candidate is indeed the majority element
    if (candidate !== null) {
        const totalCount = nums.filter(n => n === candidate).length;
        if (totalCount > nums.length / 2) {
            return candidate;
        }
    }

    return null;
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
const majority = findMajorityElement(array);
console.log(majority); // Output: 2
function findMajorityElement(nums: number[]): number | null {
    const sorted = nums.slice().sort((a, b) => a - b);
    const candidate = sorted[Math.floor(sorted.length / 2)];
    
    // Verify if the candidate is indeed the majority element
    const totalCount = nums.filter(n => n === candidate).length;
    if (totalCount > nums.length / 2) {
        return candidate;
    }

    return null;
}

// Example usage:
const array = [6, 5, 5];
const majority = findMajorityElement(array);
console.log(majority); // Output: 5
function findMajorityElement(nums: number[]): number | null {
    // First pass to find a candidate
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second pass to confirm the candidate is the majority
    if (candidate !== null) {
        const totalCount = nums.reduce((acc, curr) => acc + (curr === candidate ? 1 : 0), 0);
        if (totalCount > nums.length / 2) {
            return candidate;
        }
    }

    return null;
}

// Example usage:
const array1 = [3, 2, 3];
console.log(findMajorityElement(array1)); // Output: 3

const array2 = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(array2)); // Output: 2

const array3 = [1, 2, 3, 4, 5];
console.log(findMajorityElement(array3)); // Output: null (no majority element)
