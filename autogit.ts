function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(value => value < pivot);
    const middle = arr.filter(value => value === pivot);
    const right = arr.filter(value => value > pivot);

    return [...quicksort(left), ...middle, ...quicksort(right)];
}
