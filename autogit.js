def counting_sort(arr):
    max_num = max(arr)
    min_num = min(arr)
    count_arr = [0] * (max_num - min_num + 1)
    output = [0] * len(arr)

    for num in arr:
        count_arr[num - min_num] += 1

    for i in range(1, len(count_arr)):
        count_arr[i] += count_arr[i - 1]

    for num in reversed(arr):
        output[count_arr[num - min_num] - 1] = num
        count_arr[num - min_num] -= 1

    return output

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("Sorted array is:", sorted_arr)
