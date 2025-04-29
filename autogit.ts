function majorityElement(nums: number[]): number | null {
    const count: { [key: number]: number } = {};
    const threshold = Math.floor(nums.length / 2);
    
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > threshold) {
            return num; // Found the majority element
        }
    }
    
    return null; // No majority element found
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
function majorityElement(nums: number[]): number | null {
    let candidate = null;
    let count = 0;

    // First pass: Find a candidate
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

    // Second pass: Confirm the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return (count > Math.floor(nums.length / 2)) ? candidate : null; // Return candidate if it's majority
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
