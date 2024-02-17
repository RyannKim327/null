function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log("Majority Element:", majorityElement);
