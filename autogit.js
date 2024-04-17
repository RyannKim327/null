function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;
    
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}

// Example usage
const array = [2, 8, 7, 2, 2, 5, 2, 2];
const majorityElement = findMajorityElement(array);
console.log(`Majority Element: ${majorityElement}`);
