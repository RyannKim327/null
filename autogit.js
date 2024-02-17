function findMajorityElement(arr) {
    let map = {};
    let majorityElement = null;
    let maxCount = 0;
    
    for (let num of arr) {
        map[num] = map[num] ? map[num] + 1 : 1;
        if (map[num] > maxCount) {
            majorityElement = num;
            maxCount = map[num];
        }
    }
    
    if (maxCount > arr.length / 2) {
        return majorityElement;
    } else {
        return null;
    }
}

const arr = [2, 2, 3, 4, 2, 2, 2];
const majorityElement = findMajorityElement(arr);

if (majorityElement !== null) {
    console.log(`Majority element is: ${majorityElement}`);
} else {
    console.log("No majority element found");
}
