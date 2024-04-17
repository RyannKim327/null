function findSecondLargest(arr) {
    let sortedArr = arr.sort((a, b) => b - a); // Sort the array in descending order
    let uniqueArr = sortedArr.filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

    if (uniqueArr.length < 2) {
        return "Array does not have a second largest element";
    }

    return uniqueArr[1]; // Return the second element in the sorted, deduplicated array
}

// Example
let arr = [5, 2, 8, 10, 3, 1];
let secondLargest = findSecondLargest(arr);

console.log("Second largest element in the array is: " + secondLargest);
