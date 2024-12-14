def second_largest(arr):
    arr.sort(reverse=True)
    return arr[1]

# Test the function
arr = [10, 5, 20, 8]
print(second_largest(arr))  # Output: 10
