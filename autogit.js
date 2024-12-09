def merge_sort(arr):
    n = len(arr)
    current_size = 1

    while current_size < n - 1:
        left = 0
        while left < n - 1:
            mid = min(left + current_size - 1, n - 1)
            right = min(left + 2 * current_size - 1, n - 1)
            merge(arr, left, mid, right)
            left += 2 * current_size
        current_size = 2 * current_size

    return arr

def merge(arr, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid

    L = [arr[left + i] for i in range(n1)]
    R = [arr[mid + 1 + i] for i in range(n2)]

    i = j = 0
    k = left

    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print(sorted_arr)
