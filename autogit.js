function findMajorityElement(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
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
        return null;
    }
}

// Test the function
const arr = [2, 2, 3, 4, 2, 2, 2];
const majorityElement = findMajorityElement(arr);

if (majorityElement !== null) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log("No majority element found");
}
