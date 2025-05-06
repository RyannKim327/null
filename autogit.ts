function quicksort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter((x, i) => x <= pivot && i !== arr.length - 1);
    const right = arr.filter((x) => x > pivot);

    return [...quicksort(left), pivot, ...quicksort(right)];
}
