def interpolation_search(arr, x):
    lo = 0
    hi = len(arr) - 1

    while lo <= hi and x >= arr[lo] and x <= arr[hi]:
        if lo == hi:
            if arr[lo] == x:
                return lo
            return -1

        pos = lo + int(((float(hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo])))

        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            lo = pos + 1
        else:
            hi = pos - 1

    return -1

# Example usage
arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
x = 10
result = interpolation_search(arr, x)
if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found")
