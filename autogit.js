def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        mid_val = arr[mid]

        if mid_val == target:
            return mid
        elif target < mid_val:
            high = mid - 1
        else:
            low = mid + 1

    return -1

# Example usage
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17]
target = 11
result = binary_search(arr, target)

if result != -1:
    print(f"Found target at index {result}")
else:
    print("Target not found in the array")
