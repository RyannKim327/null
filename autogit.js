def counting_sort(arr):
    max_val = max(arr)
    count_arr = [0] * (max_val + 1)
    sorted_arr = [0] * len(arr)

    for num in arr:
        count_arr[num] += 1

    for i in range(1, len(count_arr)):
        count_arr[i] += count_arr[i-1]

    for num in arr:
        sorted_arr[count_arr[num] - 1] = num
        count_arr[num] -= 1

    return sorted_arr

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
