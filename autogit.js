def second_largest_element(arr):
    if len(arr) < 2:
        return "Array must have at least two elements"

    largest = max(arr[0], arr[1])
    second_largest = min(arr[0], arr[1])

    for i in range(2, len(arr)):
        if arr[i] > largest:
            second_largest = largest
            largest = arr[i]
        elif arr[i] > second_largest and arr[i] != largest:
            second_largest = arr[i]

    return second_largest

# Example usage
arr = [3, 5, 1, 9, 8, 2, 7]
print("Second largest element is:", second_largest_element(arr))
