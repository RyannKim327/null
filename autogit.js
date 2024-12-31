def fibonacci_search(arr, element):
    fib_m_minus_2 = 0
    fib_m_minus_1 = 1
    fib_m = fib_m_minus_1 + fib_m_minus_2
    while fib_m < len(arr):
        fib_m_minus_2 = fib_m_minus_1
        fib_m_minus_1 = fib_m
        fib_m = fib_m_minus_1 + fib_m_minus_2

    offset = -1
    while fib_m > 1:
        i = min(offset+fib_m_minus_2, len(arr)-1)
        if arr[i] < element:
            fib_m = fib_m_minus_1
            fib_m_minus_1 = fib_m_minus_2
            fib_m_minus_2 = fib_m - fib_m_minus_1
            offset = i
        elif arr[i] > element:
            fib_m = fib_m_minus_2
            fib_m_minus_1 = fib_m_minus_1 - fib_m_minus_2
            fib_m_minus_2 = fib_m - fib_m_minus_1
        else:
            return i

    if fib_m_minus_1 and arr[min(offset+1, len(arr)-1)] == element:
        return offset+1

    return -1

# Test the function
arr = [2, 3, 5, 8, 13, 21, 34, 55, 89]
element = 21
result = fibonacci_search(arr, element)
if result != -1:
    print("Element found at index:", result)
else:
    print("Element not found")
