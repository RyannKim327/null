def fibonacci_search(arr, x):
    # Initialize Fibonacci numbers
    fib_m_2 = 0
    fib_m_1 = 1
    fib = fib_m_1 + fib_m_2

    # Find the smallest Fibonacci number greater than or equal to length of array
    while fib < len(arr):
        fib_m_2 = fib_m_1
        fib_m_1 = fib
        fib = fib_m_1 + fib_m_2

    offset = -1

    while fib > 1:
        i = min(offset+fib_m_2, len(arr)-1)

        if arr[i] < x:
            fib = fib_m_1
            fib_m_1 = fib_m_2
            fib_m_2 = fib - fib_m_1
            offset = i

        elif arr[i] > x:
            fib = fib_m_2
            fib_m_1 = fib_m_1 - fib_m_2
            fib_m_2 = fib - fib_m_1

        else:
            return i

    if fib_m_1 and arr[offset+1] == x:
        return offset+1

    return -1

# Example usage
arr = [2, 3, 5, 8, 13, 21, 34, 55, 89]
x = 55
index = fibonacci_search(arr, x)
if index != -1:
    print("Element found at index:", index)
else:
    print("Element not found")
