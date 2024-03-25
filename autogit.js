function findMajorityElement(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {
        if (count == 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Check if the candidate is the majority element
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        return candidate;
    } else {
        return -1; // No majority element found
    }
}

// Test the function
const arr1 = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(arr1)); // Output: 2

const arr2 = [3, 3, 4, 2, 4, 4, 2];
console.log(findMajorityElement(arr2)); // Output: -1 (No majority element)
