def counting_sort(arr):
    max_val = max(arr)
    counts = [0] * (max_val + 1)

    for num in arr:
        counts[num] += 1

    sorted_arr = []
    for i in range(len(counts)):
        sorted_arr.extend([i] * counts[i])

    return sorted_arr

# Example
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
