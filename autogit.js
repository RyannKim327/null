Function findKthSmallest(arr, k):
    Sort the array arr in ascending order
    Return arr[k-1]
def findKthSmallest(arr, k):
    arr.sort()
    return arr[k-1]
    
arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
k = 3
result = findKthSmallest(arr, k)
print(f"The {k}th smallest element is: {result}")
