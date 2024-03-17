function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    // In case there is no majority element
    if (count <= 0) {
        return -1;
    }

    // Validate if the candidate is the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : -1;
}

// Example
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(nums)); // Output: 2
