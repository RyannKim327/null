function findMajorityElement(arr: number[]): number | null {
    const countMap: Record<number, number> = {};
    const majorityCount = arr.length / 2;

    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > majorityCount) {
            return num;
        }
    }
    return null; // If no majority element exists
}

// Example usage:
const nums = [3, 2, 3];
console.log(findMajorityElement(nums)); // Output: 3
function findMajorityElement(arr: number[]): number | null {
    let candidate = arr[0];
    let count = 0;

    // Phase 1: Find the candidate
    for (const num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }

    // Phase 2: Verify the candidate
    count = 0;
    for (const num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > arr.length / 2 ? candidate : null;
}

// Example usage:
const nums = [3, 2, 3];
console.log(findMajorityElement(nums)); // Output: 3
function findMajorityElement(arr: number[]): number | null {
    if (arr.length === 0) return null;

    arr.sort((a, b) => a - b);
    const candidate = arr[Math.floor(arr.length / 2)];
    const count = arr.filter(num => num === candidate).length;

    return count > arr.length / 2 ? candidate : null;
}

// Example usage:
const nums = [3, 2, 3];
console.log(findMajorityElement(nums)); // Output: 3
