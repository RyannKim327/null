function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // First pass to find a potential candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second pass to confirm the candidate is the majority
    if (candidate !== null) {
        const totalCount = nums.filter(num => num === candidate).length;
        if (totalCount > Math.floor(nums.length / 2)) {
            return candidate;
        }
    }

    return null; // No majority element found
}

// Example Usage:
const array = [3, 2, 3];
const result = majorityElement(array);
console.log(`Majority Element: ${result}`); // Output: Majority Element: 3
function majorityElementWithHashMap(nums: number[]): number | null {
    const counts: { [key: number]: number } = {};
    const threshold = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > threshold) {
            return num; // Early exit if majority found
        }
    }

    return null; // No majority element found
}

// Example Usage:
const array2 = [2, 2, 1, 1, 1, 2, 2];
const result2 = majorityElementWithHashMap(array2);
console.log(`Majority Element: ${result2}`); // Output: Majority Element: 2
function majorityElementWithSort(nums: number[]): number | null {
    if (nums.length === 0) return null;

    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    const candidate = nums[mid];

    // Verify that the candidate is indeed the majority element
    const count = nums.filter(num => num === candidate).length;
    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    }

    return null; // No majority element found
}

// Example Usage:
const array3 = [6, 5, 5];
const result3 = majorityElementWithSort(array3);
console.log(`Majority Element: ${result3}`); // Output: Majority Element: 5
class MajorityElementFinder {
    // Boyer-Moore Voting Algorithm
    static boyerMoore(nums: number[]): number | null {
        let candidate: number | null = null;
        let count = 0;

        for (const num of nums) {
            if (count === 0) {
                candidate = num;
            }
            count += (num === candidate) ? 1 : -1;
        }

        if (candidate !== null) {
            const totalCount = nums.filter(num => num === candidate).length;
            if (totalCount > Math.floor(nums.length / 2)) {
                return candidate;
            }
        }

        return null;
    }

    // Hash Map Approach
    static hashMapMethod(nums: number[]): number | null {
        const counts: { [key: number]: number } = {};
        const threshold = Math.floor(nums.length / 2);

        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
            if (counts[num] > threshold) {
                return num;
            }
        }

        return null;
    }

    // Sorting Approach
    static sortingMethod(nums: number[]): number | null {
        if (nums.length === 0) return null;

        nums.sort((a, b) => a - b);
        const mid = Math.floor(nums.length / 2);
        const candidate = nums[mid];

        const count = nums.filter(num => num === candidate).length;
        if (count > Math.floor(nums.length / 2)) {
            return candidate;
        }

        return null;
    }
}

// Example Usage:
const testArray = [4, 5, 5, 5, 4, 5, 4, 4, 5];

console.log("Using Boyer-Moore:", MajorityElementFinder.boyerMoore(testArray)); // Output: 5
console.log("Using Hash Map:", MajorityElementFinder.hashMapMethod(testArray)); // Output: 5
console.log("Using Sorting:", MajorityElementFinder.sortingMethod(testArray));   // Output: 5
Using Boyer-Moore: 5
Using Hash Map: 5
Using Sorting: 5
