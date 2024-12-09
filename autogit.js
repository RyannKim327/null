function binarySearch(arr, target):
    left = 0
    right = length(arr) - 1

    while left <= right:
        mid = left + (right - left) / 2

        if arr[mid] == target:
            return mid
        else if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
