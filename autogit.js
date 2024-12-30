def find_second_largest(arr):
    if len(arr) < 2:
        return "Array should have at least two elements"
    
    max_num = arr[0]
    second_max = float('-inf')
    
    for i in range(1, len(arr)):
        if arr[i] > max_num:
            second_max = max_num
            max_num = arr[i]
        elif arr[i] > second_max and arr[i] != max_num:
            second_max = arr[i]
    
    if second_max == float('-inf'):
        return "There is no second largest element"
    else:
        return second_max

# Example
arr = [5, 2, 8, 10, 3]
print(find_second_largest(arr))
