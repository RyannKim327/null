function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Test the function
let nums = [1, 2, 2, 2, 3, 2, 4, 2, 2];
console.log(findMajorityElement(nums)); // Output: 2
