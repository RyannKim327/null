function findMajorityElement(arr) {
    let counts = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]]++;
        }
        
        if (counts[arr[i]] > arr.length / 2) {
            return arr[i];
        }
    }
    
    return null;
}

// Example usage
const arr = [2, 1, 2, 2, 3, 2, 4, 2, 2];
const majorityElement = findMajorityElement(arr);

if (majorityElement !== null) {
    console.log('The majority element is: ' + majorityElement);
} else {
    console.log('There is no majority element in the array.');
}
