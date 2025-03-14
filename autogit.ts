function findMajorityElement(arr: number[]): number | null {
    const countMap: { [key: number]: number } = {};

    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > arr.length / 2) {
            return num;
        }
    }

    return null;
}

const array = [2, 2, 3, 2, 4, 2, 2];
const majorityElement = findMajorityElement(array);

if (majorityElement !== null) {
    console.log(`The majority element in the array is: ${majorityElement}`);
} else {
    console.log("No majority element found in the array.");
}
