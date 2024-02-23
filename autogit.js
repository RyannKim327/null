function radixSort(arr) {
    const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

    const getMaxDigits = (arr) => Math.max(...arr).toString().length;

    const radixSortHelper = (arr) => {
        const maxDigitCount = getMaxDigits(arr);
        let result = arr;

        for (let k = 0; k < maxDigitCount; k++) {
            let digitBuckets = Array.from({ length: 10 }, () => []);

            for (let i = 0; i < result.length; i++) {
                digitBuckets[getDigit(result[i], k)].push(result[i]);
            }

            result = [].concat(...digitBuckets);
        }

        return result;
    };

    return radixSortHelper(arr);
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
