def reverse_array(arr):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        # Swap elements
        arr[left], arr[right] = arr[right], arr[left]
        
        # Move pointers
        left += 1
        right -= 1
    
    return arr

# Test the function
my_array = [1, 2, 3, 4, 5]
reversed_array = reverse_array(my_array)
print(reversed_array)
