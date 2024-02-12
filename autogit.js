function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const less = [];
    const equal = [];
    const greater = [];

    for (let element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Testing the quicksort algorithm
const array = [23, 4, 42, 15, 16, 8];
const sortedArray = quicksort(array);
console.log(sortedArray);
