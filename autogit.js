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

function isMajorityElement(nums, candidate) {
    let count = 0;

    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2;
}

function majorityElement(nums) {
    const candidate = findMajorityElement(nums);

    if (isMajorityElement(nums, candidate)) {
        return candidate;
    } else {
        return null;
    }
}

// Example Usage
const nums = [2, 2, 1, 1, 1, 2, 2];
const majority = majorityElement(nums);

if (majority !== null) {
    console.log(`The majority element is: ${majority}`);
} else {
    console.log("No majority element found in the array.");
}
