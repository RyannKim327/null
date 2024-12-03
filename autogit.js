def fibonacci_search(arr, x):
    fib_n2 = 0
    fib_n1 = 1
    fib = fib_n1 + fib_n2

    while fib < len(arr):
        fib_n2 = fib_n1
        fib_n1 = fib
        fib = fib_n1 + fib_n2

    offset = -1

    while fib > 1:
        i = min(offset + fib_n2, len(arr) - 1)

        if arr[i] < x:
            fib = fib_n1
            fib_n1 = fib_n2
            fib_n2 = fib - fib_n1
            offset = i
        elif arr[i] > x:
            fib = fib_n2
            fib_n1 = fib_n1 - fib_n2
            fib_n2 = fib - fib_n1
        else:
            return i

    if fib_n1 and arr[offset] == x:
        return offset

    return -1

# Example usage:
arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
x = 35

result = fibonacci_search(arr, x)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
