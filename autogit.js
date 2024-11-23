def is_sorted_ascending(arr):
    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))

# Test the function
arr = [1, 2, 3, 4, 5]
if is_sorted_ascending(arr):
    print("Array is sorted in ascending order")
else:
    print("Array is not sorted in ascending order")
