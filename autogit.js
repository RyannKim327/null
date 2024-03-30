function findMajorityElement(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else {
            if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }
    }

    // Verify if the candidate is the majority element
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        return candidate;
    } else {
        return "No majority element found";
    }
}

// Example usage
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
