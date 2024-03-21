function findMajorityElement(arr) {
    let map = {};
    
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
        
        if (map[num] > arr.length / 2) {
            return num;
        }
    }
    
    return -1; // no majority element found
}

// Example
let arr = [2, 2, 3, 3, 3, 2, 3];
let majorityElement = findMajorityElement(arr);

if (majorityElement !== -1) {
    console.log(`The majority element in the array is: ${majorityElement}`);
} else {
    console.log(`No majority element found in the array.`);
}
