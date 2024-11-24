def interpolation_search(arr, x):
    lo = 0
    hi = len(arr) - 1
    
    while lo <= hi and x >= arr[lo] and x <= arr[hi]:
        pos = lo + ((hi - lo) // (arr[hi] - arr[lo])) * (x - arr[lo])
        
        if arr[pos] == x:
            return pos
        
        if arr[pos] < x:
            lo = pos + 1
        else:
            hi = pos - 1
    
    return -1

# Test the interpolation search algorithm
arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
x = 10

result = interpolation_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
