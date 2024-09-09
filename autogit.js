def kth_smallest_element(arr, k):
    sorted_arr = sorted(arr)  # Sort the array in ascending order
    return sorted_arr[k-1]    # Return the kth smallest element

# Example usage
arr = [4, 2, 8, 1, 5, 7]
k = 3
print(kth_smallest_element(arr, k))  # Output: 4
