function findMajorityElement(arr: number[]): number | undefined {
    let candidate: number | undefined = undefined;
    let count = 0;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
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
        return undefined;
    }
}

// Example usage
const array = [2, 2, 3, 2, 4, 2, 5, 2, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement);
