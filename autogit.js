function isArraySortedAscending(arr):
    for i from 0 to length of arr - 2:
        if arr[i] > arr[i + 1]:
            return false
    return true
