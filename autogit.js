function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    // Step 1: Find the candidate for the majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1;
    }
    
    // Step 2: Verify if the candidate is the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    
    if (count > nums.length / 2) {
        return candidate;
    } else {
        return "No majority element found";
    }
}

// Test the function
const array1 = [2, 2, 3, 3, 2, 2, 2, 2];
const array2 = [1, 2, 3, 4, 5];

console.log(findMajorityElement(array1)); // Output: 2
console.log(findMajorityElement(array2)); // Output: No majority element found
