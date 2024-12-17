def kth_smallest_element(arr, k):
    arr.sort()
    return arr[k-1]

# Example usage
arr = [7, 10, 4, 3, 20, 15]
k = 3
result = kth_smallest_element(arr, k)
print(f"The {k}th smallest element is: {result}")
