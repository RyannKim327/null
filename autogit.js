def kth_smallest_element(arr, k):
    arr.sort()
    return arr[k-1]

# Example usage
arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
k = 4
print(f"The {k}th smallest element in the array is: {kth_smallest_element(arr, k)}")
