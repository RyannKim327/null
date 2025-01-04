def kth_smallest(arr, k):
    arr.sort()
    return arr[k-1]

# Example usage
arr = [3, 7, 1, 5, 9, 2]
k = 3
result = kth_smallest(arr, k)
print(f"The {k}th smallest element in the array is: {result}")
