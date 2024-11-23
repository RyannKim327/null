def find_second_largest(arr):
    if len(arr) < 2:
        return "Array should contain at least two elements"
    
    largest = second_largest = float('-inf')
    
    for num in arr:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num
            
    return second_largest

arr = [12, 34, 10, 6, 40]
second_largest = find_second_largest(arr)
print("Second largest element in the array is:", second_largest)
