def second_largest(arr):
    if len(arr) < 2:
        return "Array must have at least 2 elements"
    
    largest = second_largest = float('-inf')
    
    for num in arr:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num < largest:
            second_largest = num
            
    return second_largest

# Example usage
arr = [3, 8, 1, 15, 7, 10]
result = second_largest(arr)
print("Second largest element in the array is:", result)
