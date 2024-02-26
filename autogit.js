function findMajorityElement(nums) {
    let majorityElement = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majorityElement) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majorityElement = nums[i];
                count = 1;
            }
        }
    }

    // At this point, the majority element is stored in `majorityElement`
    // Now, we need to verify if it is actually the majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === majorityElement) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return majorityElement;
    } else {
        return "No majority element found";
    }
}

// Test the algorithm
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(nums)); // Output: 2
