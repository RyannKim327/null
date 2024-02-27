function kthSmallestElement(array, k) {
    array.sort(function(a, b) {
        return a - b;
    });

    return array[k - 1];
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 4;

const result = kthSmallestElement(array, k);
console.log(`The ${k}th smallest element is: ${result}`);
