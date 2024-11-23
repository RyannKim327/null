def find_second_largest(arr):
    if len(arr) < 2:
        return "Array must have at least 2 elements"

    max_num = float('-inf')
    second_max = float('-inf')

    for num in arr:
        if num > max_num:
            second_max = max_num
            max_num = num
        elif num > second_max and num != max_num:
            second_max = num

    return second_max

# Sample array
arr = [5, 3, 8, 1, 9, 4, 7, 2, 6]
print("Second largest element is:", find_second_largest(arr))
