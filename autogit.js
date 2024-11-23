def merge_sort_iterative(arr):
    n = len(arr)
    curr_size = 1

    while curr_size < n:
        left = 0
        while left < n - 1:
            mid = min(left + curr_size - 1, n - 1)
            right = min(left + 2 * curr_size - 1, n - 1)

            merge(arr, left, mid, right)
            left += 2 * curr_size

        curr_size *= 2

    return arr

def merge(arr, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid

    left_arr = [arr[left + i] for i in range(n1)]
    right_arr = [arr[mid + 1 + i] for i in range(n2)]

    i, j, k = 0, 0, left

    while i < n1 and j < n2:
        if left_arr[i] <= right_arr[j]:
            arr[k] = left_arr[i]
            i += 1
        else:
            arr[k] = right_arr[j]
            j += 1
        k += 1

    while i < n1:
        arr[k] = left_arr[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = right_arr[j]
        j += 1
        k += 1

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
print("Original array:", arr)
sorted_arr = merge_sort_iterative(arr)
print("Sorted array:", sorted_arr)
