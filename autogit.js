def fibonacci_search(arr, x):
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

        if arr[i] < x:
            fib_m = fib_m_minus_1
            fib_m_minus_1 = fib_m_minus_2
            fib_m_minus_2 = fib_m - fib_m_minus_1
            offset = i

        elif arr[i] > x:
            fib_m = fib_m_minus_2
            fib_m_minus_1 = fib_m_minus_1 - fib_m_minus_2
            fib_m_minus_2 = fib_m - fib_m_minus_1

        else:
            return i

    if fib_m_minus_1 and arr[offset + 1] == x:
        return offset + 1

    return -1

# Example Usage
arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
x = 85
index = fibonacci_search(arr, x)
if index != -1:
    print("Element found at index:", index)
else:
    print("Element not found in the array")
