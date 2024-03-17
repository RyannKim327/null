function findMajorityElement(arr) {
    let hash = {};
    let majorityElement = null;
    let majorityCount = 0;

    // Count occurrences of each element in the array
    for (let num of arr) {
        hash[num] = (hash[num] || 0) + 1;
        if (hash[num] > majorityCount) {
            majorityElement = num;
            majorityCount = hash[num];
        }
    }

    // Check if the majority element is indeed the majority
    if (majorityCount > arr.length / 2) {
        return majorityElement;
    } else {
        return "No majority element found";
    }
}

// Example
const array = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(array)); // Output: 2
