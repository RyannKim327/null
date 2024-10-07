boolean isSorted(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Array is not sorted in ascending order
        }
    }
    return true; // Array is sorted in ascending order
}
