def counting_sort(arr):
    max_val = max(arr)
    counts = [0] * (max_val + 1)
    sorted_arr = [0] * len(arr)

    for num in arr:
        counts[num] += 1

    for i in range(1, max_val + 1):
        counts[i] += counts[i - 1]

    for num in reversed(arr):
        sorted_arr[counts[num] - 1] = num
        counts[num] -= 1

    return sorted_arr

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
