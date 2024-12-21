def binary_search_recursive(arr, left, right, target):
    if right >= left:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binary_search_recursive(arr, left, mid - 1, target)
        else:
            return binary_search_recursive(arr, mid + 1, right, target)
    else:
        return -1

# Example usage
arr = [2, 3, 6, 8, 10, 14, 16]
target = 10
result = binary_search_recursive(arr, 0, len(arr) - 1, target)

if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in the array")
