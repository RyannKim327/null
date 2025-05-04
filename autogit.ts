function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];

    // Find the min and max values to handle arrays with negative numbers too
    let min = arr[0];
    let max = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const range = max - min + 1;
    const count = new Array(range).fill(0);

    // Count the frequency of each element
    for (let num of arr) {
        count[num - min]++;
    }

    // Reconstruct the sorted array
    let sortedIndex = 0;
    const sortedArr = new Array(arr.length);
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArr[sortedIndex++] = i + min;
            count[i]--;
        }
    }

    return sortedArr;
}
