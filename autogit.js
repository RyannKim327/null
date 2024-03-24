function radixSort(arr) {
    // Find the maximum number to know number of digits
    const maxNum = Math.max(...arr);
    let divisor = 1;
    
    while (divisor < maxNum) {
        let buckets = Array.from({ length: 10 }, () => []);

        // Place each number in the corresponding bucket based on the current digit
        for (let num of arr) {
            const digit = Math.floor(num / divisor) % 10;
            buckets[digit].push(num);
        }

        // Flatten the buckets into a new array
        arr = [].concat(...buckets);
        
        // Move to the next digit
        divisor *= 10;
    }

    return arr;
}

// Example usage
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
