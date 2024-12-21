def countingSort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    output = [0] * len(arr)

    for num in arr:
        count[num] += 1

    for i in range(1, max_val + 1):
        count[i] += count[i - 1]

    for num in arr:
        output[count[num] - 1] = num
        count[num] -= 1

    return output

# Example Usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = countingSort(arr)
print("Sorted array is:", sorted_arr)
