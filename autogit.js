def kth_smallest(arr, k):
    arr.sort()
    return arr[k-1]

# Example usage
arr = [3, 1, 4, 1, 5, 9, 2, 6]
k = 3
kth_element = kth_smallest(arr, k)
print(kth_element)
