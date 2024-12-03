def find_second_largest(arr):
    # Sort the array in descending order
    arr.sort(reverse=True)
    
    # Return the element at index 1
    return arr[1]

# Test the function
arr = [1, 5, 3, 9, 7]
print("Second largest element:", find_second_largest(arr))
