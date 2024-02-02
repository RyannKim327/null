function interpolationSearch(array, target) {
    // ...
}
    let low = 0;
    let high = array.length - 1;
    while (low <= high && target >= array[low] && target <= array[high]) {
        // ...
    }
        let pos = Math.floor(
            low + ((target - array[low]) * (high - low)) / (array[high] - array[low])
        );
        if (array[pos] === target) return pos;
        if (array[pos] > target) {
            high = pos - 1;
        }
        else {
            low = pos + 1;
        }
    return -1;
function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {
        let pos = Math.floor(
            low + ((target - array[low]) * (high - low)) / (array[high] - array[low])
        );

        if (array[pos] === target) return pos;

        if (array[pos] > target) {
            high = pos - 1;
        } else {
            low = pos + 1;
        }
    }

    return -1;
}
