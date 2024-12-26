def countingSort(arr):
    max_val = max(arr)
    min_val = min(arr)
    range_of_elements = max_val - min_val + 1

    count_array = [0] * range_of_elements
    output_array = [0] * len(arr)

    for num in arr:
        count_array[num - min_val] += 1

    for i in range(1, len(count_array)):
        count_array[i] += count_array[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        output_array[count_array[arr[i] - min_val] - 1] = arr[i]
        count_array[arr[i] - min_val] -= 1

    for i in range(len(arr)):
        arr[i] = output_array[i]

arr = [4, 2, 2, 8, 3, 3, 1]
countingSort(arr)
print("Sorted array is:", arr)
