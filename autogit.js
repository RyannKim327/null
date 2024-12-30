def interpolation_search(arr, x):
    lo = 0
    hi = len(arr) - 1

    while lo <= hi and x >= arr[lo] and x <= arr[hi]:
        pos = lo + ((hi - lo) // (arr[hi] - arr[lo])) * (x - arr[lo])

        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            lo = pos + 1
        else:
            hi = pos - 1

    return -1

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x = 6
result = interpolation_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
