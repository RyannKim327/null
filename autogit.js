def binary_search_recursive(arr, start, end, target):
    if start > end:
        return -1
    
    mid = start + (end - start) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, mid + 1, end, target)
    else:
        return binary_search_recursive(arr, start, mid - 1, target)

# Example Usage
arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
target = 12
result = binary_search_recursive(arr, 0, len(arr) - 1, target)

if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found")
