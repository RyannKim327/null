def find_kth_smallest(arr, k):
    sorted_arr = sorted(arr)  # Sort the array in ascending order
    return sorted_arr[k-1]  # Return the kth smallest element

# Example usage
arr = [4, 2, 7, 1, 5, 9, 3]
k = 3
result = find_kth_smallest(arr, k)
print(f"The {k}th smallest element is: {result}")
