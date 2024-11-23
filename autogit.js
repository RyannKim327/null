def binary_search_recursive(arr, target, left, right):
    if right >= left:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binary_search_recursive(arr, target, left, mid - 1)
        else:
            return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return -1

# Example usage
arr = [2, 4, 6, 8, 10, 12, 14, 16]
target = 10

result = binary_search_recursive(arr, target, 0, len(arr) - 1)
if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found in the array")
