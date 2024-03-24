function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const n = arr.length;
    const aux = new Array(n);
    let step = 1;

    while (step < n) {
        let left = 0;
        while (left + step < n) {
            const mid = left + step;
            const right = Math.min(left + 2 * step, n);
            merge(arr, aux, left, mid, right);
            left += 2 * step;
        }
        step *= 2;
    }

    return arr;
}

function merge(arr, aux, left, mid, right) {
    let i = left;
    let j = mid;
    for (let k = left; k < right; k++) {
        if (i < mid && (j >= right || arr[i] <= arr[j])) {
            aux[k] = arr[i];
            i++;
        } else {
            aux[k] = arr[j];
            j++;
        }
    }
    for (let k = left; k < right; k++) {
        arr[k] = aux[k];
    }
}

// Usage
const arr = [8, 4, 1, 9, 6, 3, 7, 2, 5];
console.log(mergeSort(arr));
