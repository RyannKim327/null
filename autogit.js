function radixSort(arr) {
    const getMax = (arr) => {
        let max = 0;
        arr.forEach(num => {
            max = Math.max(max, num);
        });
        return max;
    };
    
    const digitCount = (num) => {
        if (num === 0) return 1;
        return Math.floor(Math.log10(num)) + 1;
    };
    
    const getDigit = (num, place) => {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    };
    
    const radixSortHelper = (arr) => {
        const maxDigits = digitCount(getMax(arr));
        for (let k = 0; k < maxDigits; k++) {
            const buckets = Array.from({ length: 10 }, () => []);
            for (let i = 0; i < arr.length; i++) {
                const digit = getDigit(arr[i], k);
                buckets[digit].push(arr[i]);
            }
            arr = [].concat(...buckets);
        }
        return arr;
    };
    
    return radixSortHelper(arr);
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr);
