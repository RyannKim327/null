def fibonacci_search(arr, x):
    fib_n_2 = 0
    fib_n_1 = 1
    fib_n = fib_n_1 + fib_n_2
    
    while fib_n < len(arr):
        fib_n_2 = fib_n_1
        fib_n_1 = fib_n
        fib_n = fib_n_1 + fib_n_2
    
    offset = -1
    
    while fib_n > 1:
        i = min(offset + fib_n_2, len(arr) - 1)
        
        if arr[i] < x:
            fib_n = fib_n_1
            fib_n_1 = fib_n_2
            fib_n_2 = fib_n - fib_n_1
            offset = i
        elif arr[i] > x:
            fib_n = fib_n_2
            fib_n_1 = fib_n_1 - fib_n_2
            fib_n_2 = fib_n - fib_n_1
        else:
            return i
    
    if fib_n_1 and arr[offset + 1] == x:
        return offset + 1
    
    return -1

# Test the Fibonacci search algorithm
arr = [2, 3, 5, 8, 13, 21, 34, 55, 89]
x = 55
index = fibonacci_search(arr, x)

if index != -1:
    print(f"Element found at index: {index}")
else:
    print("Element not found")
