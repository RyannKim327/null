import heapq

def find_kth_smallest(arr, k):
    # Create a min-heap using the elements of the array
    heap = arr[:]
    heapq.heapify(heap)

    # Pop elements from the heap until the kth smallest element is reached
    for _ in range(k):
        result = heapq.heappop(heap)

    return result

# Example usage
arr = [7, 10, 4, 3, 20, 15]
k = 3
kth_smallest = find_kth_smallest(arr, k)
print(f"The {k}th smallest element in the array is: {kth_smallest}")
