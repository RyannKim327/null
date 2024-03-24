function findMajorityElement(arr) {
    let counts = {};
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1; // Increment count of the number
    }
    
    for (let key in counts) {
        if (counts[key] > arr.length / 2) {
            return key;
        }
    }
    
    return "No majority element found";
}

// Example usage
const array = [2, 8, 7, 2, 2, 5, 2, 2, 9];
console.log("Majority element: ", findMajorityElement(array));
