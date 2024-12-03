def fibonacci_search(arr, x):
    fib_m2 = 0  # (m-2)'th Fibonacci number
    fib_m1 = 1  # (m-1)'th Fibonacci number
    fib = fib_m2 + fib_m1  # m'th Fibonacci number

    while fib < len(arr):
        fib_m2 = fib_m1
        fib_m1 = fib
        fib = fib_m2 + fib_m1

    offset = -1

    while fib > 1:
        i = min(offset + fib_m2, len(arr) - 1)

        if arr[i] < x:
            fib = fib_m1
            fib_m1 = fib_m2
            fib_m2 = fib - fib_m1
            offset = i

        elif arr[i] > x:
            fib = fib_m2
            fib_m1 = fib_m1 - fib_m2
            fib_m2 = fib - fib_m1

        else:
            return i

    if fib_m1 and arr[offset + 1] == x:
        return offset + 1

    return -1  # if element is not in the array

# Example usage
arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
x = 85
index = fibonacci_search(arr, x)

if index != -1:
    print("Element found at index:", index)
else:
    print("Element not found in the array")
