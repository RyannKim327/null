def interpolation_search(arr, x):
    low = 0
    high = len(arr) - 1
    
    while low <= high and x >= arr[low] and x <= arr[high]:
        pos = low + ((high - low) // (arr[high] - arr[low])) * (x - arr[low])
        
        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1
    
    return -1

# Example usage
arr = [2, 4, 7, 9, 11, 13, 16, 18, 20]
x = 13
result = interpolation_search(arr, x)

if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found")
