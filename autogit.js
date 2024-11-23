def fibonacci_search(arr, x):
    # Initialize Fibonacci numbers
    fib2 = 0
    fib1 = 1
    fib = fib1 + fib2

    # Find the smallest Fibonacci number greater than or equal to the length of array
    while fib < len(arr):
        fib2 = fib1
        fib1 = fib
        fib = fib1 + fib2

    offset = -1

    while fib > 1:
        i = min(offset + fib2, len(arr) - 1)

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

    if fib1 and arr[offset + 1] == x:
        return offset + 1

    return -1

# Example usage
arr = [10, 20, 30, 40, 50, 60, 70]
x = 60
result = fibonacci_search(arr, x)
if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found in the array")
