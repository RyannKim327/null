function findMajorityElement(arr) {
    let count = 0;
    let candidate;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    // Validate the candidate
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
const array = [2, 2, 3, 4, 2, 2, 5, 2, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement);
