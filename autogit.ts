function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];

    // Find max and min values to handle possible negative numbers as well
    let max = arr[0];
    let min = arr[0];
    for (const num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    const range = max - min + 1;
    const count = new Array(range).fill(0);

    // Count each number's frequency
    for (const num of arr) {
        count[num - min]++;
    }

    // Reconstruct the sorted array
    const sortedArr: number[] = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArr.push(i + min);
            count[i]--;
        }
    }

    return sortedArr;
}
console.log(countingSort([4, 2, -3, 6, 1, 2, -3]));
// Output: [-3, -3, 1, 2, 2, 4, 6]
