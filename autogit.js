function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;

    // Find a candidate
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
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
        return -1; // No majority element
    }
}

const array = [2, 2, 2, 3, 4, 2, 2];
const majorityElement = findMajorityElement(array);

if (majorityElement !== -1) {
    console.log(`Majority element in the array is: ${majorityElement}`);
} else {
    console.log("No majority element found in the array.");
}
