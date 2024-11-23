def interpolation_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high and x >= arr[low] and x <= arr[high]:
        pos = low + (high - low) * (x - arr[low]) // (arr[high] - arr[low])

        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1

    return -1

# Test the interpolation search algorithm
arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
x = 10
result = interpolation_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
