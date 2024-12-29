def find_second_largest(arr):
    if len(arr) < 2:
        return None

    max_num = max(arr[0], arr[1])
    second_max = min(arr[0], arr[1])

    for i in range(2, len(arr)):
        if arr[i] > max_num:
            second_max = max_num
            max_num = arr[i]
        elif arr[i] > second_max and arr[i] != max_num:
            second_max = arr[i]

    return second_max

# Example usage
arr = [5, 2, 8, 9, 1]
result = find_second_largest(arr)
print(result)
