def interpolation_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high and x >= arr[low] and x <= arr[high]:
        pos = low + ((x - arr[low]) * (high - low)) // (arr[high] - arr[low])

        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1

    return -1

# Example usage
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
x = 13
index = interpolation_search(arr, x)

if index != -1:
    print(f"Element found at index: {index}")
else:
    print("Element not found")
