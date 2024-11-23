def is_ascending(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True

# Test the function
array1 = [1, 2, 3, 4, 5]
array2 = [5, 4, 3, 2, 1]

print(is_ascending(array1))  # Output: True
print(is_ascending(array2))  # Output: False
