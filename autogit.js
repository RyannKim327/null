def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m

    L = [0] * n1
    R = [0] * n2

    for i in range(n1):
        L[i] = arr[l + i]

    for j in range(n2):
        R[j] = arr[m + 1 + j]

    i = 0
    j = 0
    k = l

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

def merge_sort(arr):
    n = len(arr)
    curr_size = 1

    while curr_size < n - 1:
        l = 0
        while l < n - 1:
            m = min(l + curr_size - 1, n - 1)
            r = min(l + 2*curr_size - 1, n - 1)

            merge(arr, l, m, r)
            l += 2 * curr_size

        curr_size = 2 * curr_size

    return arr

arr = [12, 11, 13, 5, 6, 7]
print("Original array:", arr)
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)
