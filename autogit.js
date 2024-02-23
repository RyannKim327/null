function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

function isMajorityElement(nums, candidate) {
    let count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    
    return count > nums.length / 2;
}

function getMajorityElement(nums) {
    const candidate = findMajorityElement(nums);

    if (isMajorityElement(nums, candidate)) {
        return candidate;
    } else {
        return "No majority element found";
    }
}

// Example
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(getMajorityElement(nums)); // Output: 2
