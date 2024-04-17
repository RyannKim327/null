function findMajorityElement(arr) {
    let majorityElement = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === majorityElement) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            majorityElement = arr[i];
            count = 1;
        }
    }

    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === majorityElement) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        return majorityElement;
    } else {
        return -1; // no majority element found
    }
}

// Test
const arr = [2, 2, 3, 4, 2, 2, 2];
const majorityElement = findMajorityElement(arr);
if (majorityElement !== -1) {
    console.log("Majority element is: " + majorityElement);
} else {
    console.log("No majority element found");
}
