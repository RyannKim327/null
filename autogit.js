def fibonacci_search(arr, key):
    fib_m_minus_2 = 0
    fib_m_minus_1 = 1
    fib_m = fib_m_minus_1 + fib_m_minus_2

    while fib_m < len(arr):
        fib_m_minus_2 = fib_m_minus_1
        fib_m_minus_1 = fib_m
        fib_m = fib_m_minus_1 + fib_m_minus_2

    offset = -1

    while fib_m > 1:
        i = min(offset + fib_m_minus_2, len(arr) - 1)

        if arr[i] < key:
            fib_m = fib_m_minus_1
            fib_m_minus_1 = fib_m_minus_2
            fib_m_minus_2 = fib_m - fib_m_minus_1
            offset = i

        elif arr[i] > key:
            fib_m = fib_m_minus_2
            fib_m_minus_1 = fib_m_minus_1 - fib_m_minus_2
            fib_m_minus_2 = fib_m - fib_m_minus_1

        else:
            return i

    if fib_m_minus_1 and arr[offset + 1] == key:
        return offset + 1

    return -1

# Test the Fibonacci search algorithm
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
key = 6
index = fibonacci_search(arr, key)

if index != -1:
    print(f"Element found at index {index}")
else:
    print("Element not found")
