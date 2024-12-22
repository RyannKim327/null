def interpolation_search(arr, x):
    n = len(arr)
    low = 0
    high = n - 1
    
    while low <= high and x >= arr[low] and x <= arr[high]:
        pos = low + int(((float(high - low) / (arr[high] - arr[low])) * (x - arr[low]))
        
        if arr[pos] == x:
            return pos
        elif arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1
    
    return -1

# Example usage
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
x = 50
result = interpolation_search(arr, x)
if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
