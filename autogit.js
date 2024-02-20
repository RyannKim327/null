function findMajorityElement(arr) {
    let frequency = new Map();
    
    for (let num of arr) {
        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
        
        if (frequency.get(num) > arr.length / 2) {
            return num;
        }
    }
    
    return null;
}

// Example
const arr = [1, 2, 2, 2, 3, 2, 2, 4, 2];
const majorityElement = findMajorityElement(arr);
if (majorityElement !== null) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log('No majority element found');
}
