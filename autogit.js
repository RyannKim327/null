def fibonacci_search(arr, x):
    # Initialize Fibonacci numbers
    fib1, fib2 = 0, 1
    fib3 = fib1 + fib2
    
    # Find the smallest Fibonacci number greater than or equal to the length of the array
    while fib3 < len(arr):
        fib1 = fib2
        fib2 = fib3
        fib3 = fib1 + fib2
    
    offset = -1
    
    while fib3 > 1:
        i = min(offset + fib1, len(arr) - 1)
        
        if arr[i] < x:
            fib3 = fib2
            fib2 = fib1
            fib1 = fib3 - fib2
            offset = i
        elif arr[i] > x:
            fib3 = fib1
            fib2 = fib2 - fib1
            fib1 = fib3 - fib2
        else:
            return i
    
    if fib2 and arr[offset+1] == x:
        return offset+1
    
    return -1
