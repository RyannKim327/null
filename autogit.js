function findMajorityElement(arr) {
    const freqMap = {};
    
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        
        if (freqMap[num] > arr.length / 2) {
            return num;
        }
    }

    return null; // No majority element found
}

// Example
const array = [2, 2, 3, 4, 2, 2, 2];
const majorityElement = findMajorityElement(array);
if (majorityElement !== null) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log("No majority element found");
}
