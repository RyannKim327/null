def counting_sort(arr):
    max_num = max(arr)
    min_num = min(arr)
    range_of_elements = max_num - min_num + 1

    count = [0] * range_of_elements
    output = [0] * len(arr)
    
    for num in arr:
        count[num - min_num] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]
    
    for num in reversed(arr):
        output[count[num - min_num] - 1] = num
        count[num - min_num] -= 1

    return output

# Testing the counting sort algorithm
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("Sorted array is:", sorted_arr)
