function findMajorityElement(arr) {
    const map = {};
    const majorityThreshold = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }

        if (map[arr[i]] > majorityThreshold) {
            return arr[i];
        }
    }

    return null;
}

// Example usage
const array = [2, 3, 2, 2, 1, 2, 4, 2, 2];
const majorityElement = findMajorityElement(array);
if (majorityElement) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log("No majority element found");
}
