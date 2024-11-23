import heapq

def find_kth_smallest(arr, k):
    if k < 1 or k > len(arr):
        return None

    heap = arr[:k]
    heapq._heapify_max(heap)  # convert list to max heap

    for num in arr[k:]:
        if num < heap[0]:
            heapq._heapreplace_max(heap, num)

    return heap[0]

# Test the function
arr = [7, 10, 4, 3, 20, 15]
k = 3
result = find_kth_smallest(arr, k)

if result is not None:
    print(f"The {k}th smallest element in the array is: {result}")
else:
    print("Invalid value of k")
