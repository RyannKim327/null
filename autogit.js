function findMajorityElement(arr) {
    let majorElement = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (count === 0) {
            majorElement = arr[i];
            count = 1;
        } else if (majorElement === arr[i]) {
            count++;
        } else {
            count--;
        }
    }

    // Check if the found majority element is actually the majority
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === majorElement) {
            count++;
        }
    }

    if (count > Math.floor(arr.length / 2)) {
        return majorElement;
    } else {
        return "No majority element found";
    }
}

// Example usage
const arr = [2, 2, 3, 4, 2, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
