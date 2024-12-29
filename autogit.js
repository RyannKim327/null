def is_sorted_ascending(arr):
    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            return False
    return True

# Test the function
arr1 = [1, 2, 3, 4, 5]
arr2 = [5, 4, 3, 2, 1]

print(is_sorted_ascending(arr1))  # Output: True
print(is_sorted_ascending(arr2))  # Output: False
