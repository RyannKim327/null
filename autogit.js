function findMajorityElement(arr) {
    let map = {};
    let majorityElement = null;
    let maxCount = 0;

    // Count occurrences of each element in the array
    arr.forEach(num => {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
        
        if (map[num] > maxCount) {
            maxCount = map[num];
            majorityElement = num;
        }
    });

    // Check if the majority element count is greater than half the length of the array
    if (maxCount > arr.length / 2) {
        return majorityElement;
    } else {
        return "No majority element found";
    }
}

// Test the function
const array = [2, 2, 3, 4, 2, 2, 5, 2, 2];
console.log(findMajorityElement(array)); // Output: 2
