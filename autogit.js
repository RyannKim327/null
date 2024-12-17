def fibonacci_search(arr, x):
    fib_M = 0
    fib_N = 1
    fib_K = fib_M + fib_N
    
    while fib_K < len(arr):
        fib_M = fib_N
        fib_N = fib_K
        fib_K = fib_M + fib_N
    
    offset = -1
    
    while fib_K > 1:
        i = min(offset+fib_M, len(arr)-1)
        
        if arr[i] < x:
            fib_K = fib_N
            fib_N = fib_M
            fib_M = fib_K - fib_N
            offset = i
        
        elif arr[i] > x:
            fib_K = fib_M
            fib_N = fib_N - fib_M
            fib_M = fib_K - fib_N
        
        else:
            return i
    
    if fib_N and arr[offset+1] == x:
        return offset+1
    
    return -1

# Test the Fibonacci search algorithm
arr = [2, 3, 4, 10, 40]
x = 10
index = fibonacci_search(arr, x)
if index != -1:
    print("Element found at index", index)
else:
    print("Element not found")
