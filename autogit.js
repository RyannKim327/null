def fibonacci_search(arr, x):
    n = len(arr)
    
    fib2 = 0  # (m-2)nd Fibonacci number
    fib1 = 1  # (m-1)th Fibonacci number
    fib = fib1 + fib2  # mth Fibonacci number
    
    while fib < n:
        fib2 = fib1
        fib1 = fib
        fib = fib1 + fib2
    
    offset = -1  # To keep track of the eliminated range
    while fib > 1:
        i = min(offset+fib2, n-1)
        
        if arr[i] < x:
            fib = fib1
            fib1 = fib2
            fib2 = fib - fib1
            offset = i
        
        elif arr[i] > x:
            fib = fib2
            fib1 = fib1 - fib2
            fib2 = fib - fib1
        
        else:
            return i
    
    if fib1 and arr[offset+1] == x:
        return offset+1
    
    return -1

# Test the function
arr = [10, 22, 30, 44, 56, 58, 60, 70, 100]
x = 60
result = fibonacci_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
