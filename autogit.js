function generateFibonacci(n) {
    let fibArray = [0, 1];
    while (fibArray[fibArray.length - 1] < n) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }
    return fibArray;
}

function fibonacciSearch(arr, x) {
    let fibArray = generateFibonacci(arr.length);

    let offset = 0;
    let i = fibArray.length - 1;

    while (i > 1) {
        let index = Math.min(offset + fibArray[i - 2], arr.length - 1);

        if (arr[index] < x) {
            i--;
            offset = index;
        } else if (arr[index] > x) {
            i -= 2;
        } else {
            return index;
        }
    }

    if (arr[offset] === x) {
        return offset;
    }

    return -1;
}

// Sample usage
let arr = [2, 3, 4, 10, 40];
let x = 10;
let index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
