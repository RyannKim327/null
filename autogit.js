def counting_sort(arr):
    max_value = max(arr)
    counts = [0] * (max_value + 1)
    output = [0] * len(arr)

    for num in arr:
        counts[num] += 1

    for i in range(1, len(counts)):
        counts[i] += counts[i - 1]

    for num in reversed(arr):
        output[counts[num] - 1] = num
        counts[num] -= 1

    return output

# Example Usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
