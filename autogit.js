function findMajorityElement(arr) {
    let countMap = {};
    let majorityElement = null;

    arr.forEach((element) => {
        countMap[element] = (countMap[element] || 0) + 1;
        if (countMap[element] > arr.length / 2) {
            majorityElement = element;
            return;
        }
    });

    return majorityElement;
}

// Example usage
const arr = [2, 3, 2, 2, 4, 2, 2];
const majorityElement = findMajorityElement(arr);

if (majorityElement) {
    console.log(`The majority element is: ${majorityElement}`);
} else {
    console.log("No majority element found");
}
