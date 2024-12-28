def is_sorted_ascending(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True

# Example usage
arr = [1, 2, 3, 4, 5]
if is_sorted_ascending(arr):
    print("The array is sorted in ascending order.")
else:
    print("The array is not sorted in ascending order.")
