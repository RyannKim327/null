function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;

    // Find the candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Validate the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return candidate;
    } else {
        return null;
    }
}

// Example Usage
const nums = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(nums);
console.log(`The majority element is: ${majorityElement}`);
