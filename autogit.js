def find_second_largest(arr):
    if len(arr) < 2:
        return "Array should have at least two elements"
    
    max1 = max(arr[0], arr[1])
    max2 = min(arr[0], arr[1])

    for i in range(2, len(arr)):
        if arr[i] > max1:
            max2 = max1
            max1 = arr[i]
        elif arr[i] > max2 and arr[i] != max1:
            max2 = arr[i]

    return max2

# Example usage
arr = [10, 30, 15, 20, 25]
result = find_second_largest(arr)
print("The second largest element in the array is:", result)
