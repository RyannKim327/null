def fibonacci_search(arr, x):
    fib_minus_2 = 0
    fib_minus_1 = 1
    fib = fib_minus_1 + fib_minus_2

    while fib < len(arr):
        fib_minus_2 = fib_minus_1
        fib_minus_1 = fib
        fib = fib_minus_1 + fib_minus_2

    offset = -1

    while fib > 1:
        i = min(offset + fib_minus_2, len(arr) - 1)

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

# Example Usage
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
x = 13
result = fibonacci_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
