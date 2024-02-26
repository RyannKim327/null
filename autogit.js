function findMajorityElement(arr) {
    let count = 0;
    let candidate = null;
    
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (candidate === arr[i]) {
            count++;
        } else {
            count--;
        }
    }
    
    // Verify if the candidate is the majority element
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    
    if (count > arr.length / 2) {
        return candidate;
    } else {
        return null; // No majority element found
    }
}

// Example usage
const arr = [2, 2, 3, 2, 4, 2, 2];
const majorityElement = findMajorityElement(arr);
if (majorityElement !== null) {
    console.log(`Majority element in the array is: ${majorityElement}`);
} else {
    console.log("No majority element found in the array.");
}
