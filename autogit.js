function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
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
        return null; // No majority element found
    }
}

// Example usage
const nums = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(nums);
if (majorityElement !== null) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log('No majority element found');
}
