function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    const split = (arr) => {
        const result = arr.map(item => [item]);

        while (result.length > 1) {
            const temp = [];
            for (let i = 0; i < result.length; i += 2) {
                if (result[i + 1]) {
                    temp.push(merge(result[i], result[i + 1]));
                } else {
                    temp.push(result[i]);
                }
            }
            result = temp;
        }

        return result[0];
    };

    return split(arr);
}

// Usage
const arr = [4, 11, 5, 8, 2, 10, 6, 3, 9, 7, 1];
const sortedArray = mergeSort(arr);
console.log(sortedArray);
