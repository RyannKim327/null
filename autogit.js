function findMajorityElement(arr) {
    let freqMap = {};
    let majorityElement = null;
    let majorityCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (freqMap[arr[i]] === undefined) {
            freqMap[arr[i]] = 1;
        } else {
            freqMap[arr[i]]++;
        }

        if (freqMap[arr[i]] > majorityCount) {
            majorityElement = arr[i];
            majorityCount = freqMap[arr[i]];
        }
    }

    if (majorityCount > arr.length / 2) {
        return majorityElement;
    } else {
        return null;
    }
}

// Test the function
const arr1 = [2, 2, 3, 3, 2, 2, 2];
console.log(findMajorityElement(arr1)); // Output: 2

const arr2 = [1, 2, 3, 4, 5];
console.log(findMajorityElement(arr2)); // Output: null
