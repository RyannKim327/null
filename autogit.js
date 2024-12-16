def fibonacci_search(arr, x):
    # Initialize Fibonacci numbers
    fib1 = 0
    fib2 = 1
    fib3 = fib1 + fib2

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
            fib2 -= fib1
            fib1 = fib3 - fib2
        else:
            return i

    if fib2 and arr[offset+1] == x:
        return offset+1

    return -1

# Test the function
arr = [2, 3, 5, 6, 8, 10, 13, 15, 18, 20]
x = 15
result = fibonacci_search(arr, x)

if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found in the array.")
