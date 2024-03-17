function findMajorityElement(arr) {
    const counts = {};

    for (let num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;

        if (counts[num] > arr.length / 2) {
            return num;
        }
    }

    return null;
}

// Example
const array = [2, 3, 2, 2, 4, 2, 2];
const majorityElement = findMajorityElement(array);

if (majorityElement !== null) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log(`No majority element found`);
}
