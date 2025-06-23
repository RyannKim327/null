function majorityElement(nums: number[]): number {
    let candidate: number | null = null;
    let count: number = 0;

    // First pass to find a potential candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second pass to confirm the candidate is indeed the majority
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate!;
    } else {
        throw new Error("No majority element found");
    }
}

// Example usage:
const arr = [3, 2, 3];
console.log(majorityElement(arr)); // Output: 3
function majorityElementWithHashMap(nums: number[]): number {
    const frequencyMap: Map<number, number> = new Map();

    // Count the frequency of each element
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Find the element with frequency > n/2
    const threshold = Math.floor(nums.length / 2);
    for (const [num, count] of frequencyMap.entries()) {
        if (count > threshold) {
            return num;
        }
    }

    throw new Error("No majority element found");
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElementWithHashMap(arr)); // Output: 2
function majorityElement(nums: number[]): number | null {
    if (nums.length === 0) return null;

    // Rest of the implementation remains the same
    // ...
}
