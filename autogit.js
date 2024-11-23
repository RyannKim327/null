def binary_search(arr, target, left, right):
    if right >= left:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binary_search(arr, target, left, mid - 1)
        else:
            return binary_search(arr, target, mid + 1, right)
    else:
        return -1

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = binary_search(arr, target, 0, len(arr) - 1)

if result != -1:
    print(f"Element found at index {result}.")
else:
    print("Element not found.")
