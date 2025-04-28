function isSortedAscending(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false; // Found a pair out of order
        }
    }
    return true; // All pairs in order
}
function isSortedAscending(array: number[]): boolean {
    return array.every((value, index) => 
        index === 0 || array[index - 1] <= value
    );
}
