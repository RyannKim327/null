function findMajorityElement(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Example usage
const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(arr);

if (majorityElement) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log("No majority element found");
}
