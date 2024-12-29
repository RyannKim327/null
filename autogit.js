def fibonacci_search(arr, x):
    fib_minus_2 = 0
    fib_minus_1 = 1
    fib = fib_minus_1 + fib_minus_2
    n = len(arr)
    
    while fib < n:
        fib_minus_2 = fib_minus_1
        fib_minus_1 = fib
        fib = fib_minus_1 + fib_minus_2
        
    offset = -1
    
    while fib > 1:
        i = min(offset + fib_minus_2, n - 1)
        
        if arr[i] < x:
            fib = fib_minus_1
            fib_minus_1 = fib_minus_2
            fib_minus_2 = fib - fib_minus_1
            offset = i
        
        elif arr[i] > x:
            fib = fib_minus_2
            fib_minus_1 = fib_minus_1 - fib_minus_2
            fib_minus_2 = fib - fib_minus_1
        
        else:
            return i
    
    if fib_minus_1 and arr[offset + 1] == x:
        return offset + 1
    
    return -1

# Test the algorithm
arr = [2, 3, 5, 8, 13, 21, 34, 55, 89]
x = 21
result = fibonacci_search(arr, x)

if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found")
