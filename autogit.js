def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)

    for num in arr:
        count[num] += 1

    sorted_arr = []
    for i in range(len(count)):
        sorted_arr += [i] * count[i]

    return sorted_arr

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
