def max_sum_subarray(arr):
    max_sum = arr[0]
    current_sum = arr[0]

    for num in arr[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum

# Test the function
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(max_sum_subarray(arr))  # Output should be 6 (The subarray [4, -1, 2, 1] has the maximum sum)
