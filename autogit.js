def heapify(arr, n, i):
    largest = i
    left = 2*i + 1
    right = 2*i + 2

    if left < n and arr[i] < arr[left]:
        largest = left

    if right < n and arr[largest] < arr[right]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def build_max_heap(arr):
    n = len(arr)
    start_idx = n // 2 - 1

    for i in range(start_idx, -1, -1):
        heapify(arr, n, i)
def heap_sort(arr):
    n = len(arr)

    build_max_heap(arr)

    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("Sorted array is", arr)
