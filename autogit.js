import heapq

def kth_smallest_element(arr, k):
    heap = arr[:]
    heapq.heapify(heap)
    kth_element = None
    
    for _ in range(k):
        kth_element = heapq.heappop(heap)
    
    return kth_element

# Testing the function
arr = [7, 10, 4, 3, 20, 15]
k = 3
result = kth_smallest_element(arr, k)
print(f"The {k}th smallest element is: {result}")
