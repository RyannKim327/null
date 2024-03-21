function findSecondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

const numbers = [4, 10, 5, 8, 2];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Outputs 8
