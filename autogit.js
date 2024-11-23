def interpolation_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high and x >= arr[low] and x <= arr[high]:
        pos = low + ((high - low) // (arr[high] - arr[low])) * (x - arr[low])

        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1

    return -1

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
x = 5
result = interpolation_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
