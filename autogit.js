function findMajorityElement(arr) {
    let map = new Map();
    
    for (let num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    let majorityElement = null;
    let majorityCount = 0;
    
    for (let [key, value] of map.entries()) {
        if (value > arr.length / 2) {
            majorityElement = key;
            majorityCount = value;
            break;
        }
    }
    
    if (majorityElement !== null) {
        return majorityElement;
    } else {
        return "No majority element found";
    }
}

let arr = [2, 2, 3, 4, 2, 2, 2];
let majorityElement = findMajorityElement(arr);
console.log("Majority Element: " + majorityElement);
