def counting_sort(arr):
    max_val = max(arr)
    count_arr = [0] * (max_val + 1)
    sorted_arr = [0] * len(arr)
    
    # Count the occurrences of each element in the array
    for num in arr:
        count_arr[num] += 1
    
    # Calculate the cumulative count of elements
    for i in range(1, len(count_arr)):
        count_arr[i] += count_arr[i - 1]
    
    # Build the sorted array
    for num in arr:
        sorted_arr[count_arr[num] - 1] = num
        count_arr[num] -= 1
    
    return sorted_arr

# Test the counting sort algorithm
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("Sorted array:", sorted_arr)
