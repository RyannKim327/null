def max_subarray(arr):
    max_current = max_global = arr[0]
    
    for i in range(1, len(arr)):
        max_current = max(arr[i], max_current + arr[i])
        max_global = max(max_global, max_current)
    
    return max_global

# Example Usage
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
result = max_subarray(arr)
print("Maximum sum subarray is:", result)
