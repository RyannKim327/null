function fibonacciSearch(arr, x) {
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;

    while (fibM < arr.length) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, arr.length - 1);

        if (arr[i] < x) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }

    if (fibMMm1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

const array = [2, 4, 6, 8, 10, 12];
const x = 6;
const index = fibonacciSearch(array, x);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found in the array");
}
