def is_sorted_ascending(arr):
    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))

# Example usage
array = [1, 2, 3, 4, 5]
if is_sorted_ascending(array):
    print("The array is sorted in ascending order")
else:
    print("The array is not sorted in ascending order")
