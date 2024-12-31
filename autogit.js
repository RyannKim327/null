def fibonacci_search(arr, x):
    n = len(arr)
    
    # Fibonacci numbers
    fib_minus_2 = 0
    fib_minus_1 = 1
    fib = fib_minus_1 + fib_minus_2
    
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
        
    if fib_minus_1 and arr[offset+1] == x:
        return offset + 1
    
    return -1

# Example usage
arr = [10, 22, 30, 44, 56, 58, 60, 70, 100]
x = 56
result = fibonacci_search(arr, x)

if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found")
