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

// Example
const array = [2, 2, 3, 2, 4, 2, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement);
