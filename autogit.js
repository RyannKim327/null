def binary_search(arr, target, low, high):
    if high < low:
        return -1

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, high)
    else:
        return binary_search(arr, target, low, mid - 1)

# Example usage
arr = [2, 3, 5, 7, 9, 11, 13, 17, 19, 23]
target = 13
index = binary_search(arr, target, 0, len(arr) - 1)

if index != -1:
    print(f"Element found at index {index}")
else:
    print("Element not found")
