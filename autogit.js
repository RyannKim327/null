function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function bogosort(arr) {
    while (!isSorted(arr)) {
        shuffle(arr);
    }
    return arr;
}

let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Before sorting:", array);
array = bogosort(array);
console.log("After sorting:", array);
