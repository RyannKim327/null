def max_subarray_sum(arr):
    max_ending_here = max_so_far = arr[0]
    start = end = 0
    temp_start = 0

    for i in range(1, len(arr)):
        if arr[i] > arr[i] + max_ending_here:
            temp_start = i
            max_ending_here = arr[i]
        else:
            max_ending_here += arr[i]

        if max_ending_here > max_so_far:
            start = temp_start
            end = i
            max_so_far = max_ending_here

    return arr[start:end+1], max_so_far

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
subarray, max_sum = max_subarray_sum(arr)
print("Maximum sum subarray is:", subarray)
print("Maximum sum is:", max_sum)
