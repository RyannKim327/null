def counting_sort(arr):
    max_val = max(arr)
    min_val = min(arr)
    count_arr = [0] * (max_val - min_val + 1)

    for num in arr:
        count_arr[num - min_val] += 1

    sorted_arr = []
    for i in range(len(count_arr)):
        sorted_arr.extend([i + min_val] * count_arr[i])

    return sorted_arr

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
