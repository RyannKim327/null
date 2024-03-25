function majorityElement(nums) {
    let count = {};
    
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > nums.length / 2) {
            return num;
        }
    }
    
    return null;
}

// Example
const array = [2, 3, 2, 2, 4, 2, 2, 3, 2];
console.log(majorityElement(array)); // Output: 2
