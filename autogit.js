def find_majority_element(arr):
    count = 0
    majority_element = None
    
    for num in arr:
        if count == 0:
            majority_element = num
            count = 1
        elif majority_element == num:
            count += 1
        else:
            count -= 1
    
    return majority_element

# Example
arr = [2, 2, 3, 1, 2, 2, 2]
result = find_majority_element(arr)
print("Majority element:", result)
