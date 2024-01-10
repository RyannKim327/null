position = start + ((target - arr[start]) * (end - start)) / (arr[end] - arr[start])
function interpolationSearch(arr, target, n) {
    let start = 0;
    let end = n - 1;

    while (start <= end && target >= arr[start] && target <= arr[end]) {
        if (start === end) {
            if (arr[start] === target) {
                return start;
            }
            return -1;
        }

        let position = start + Math.floor(((target - arr[start]) * (end - start)) / (arr[end] - arr[start]));

        if (arr[position] === target) {
            return position;
        }

        if (arr[position] < target) {
            start = position + 1;
        } else {
            end = position - 1;
        }
    }

    return -1;
}
