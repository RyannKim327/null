# Helper function to heapify a subtree rooted at given index
def heapify(arr, n, i):
    largest = i  # Initialize the largest as root
    left = 2 * i + 1
    right = 2 * i + 2

    # Check if left child exists and is greater than the root
    if left < n and arr[i] < arr[left]:
        largest = left

    # Check if right child exists and is greater than the root
    if right < n and arr[largest] < arr[right]:
        largest = right

    # Swap the root if needed
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # Swap
        # Heapify the affected subtree
        heapify(arr, n, largest)

# Heap sort function
def heap_sort(arr):
    n = len(arr)

    # Build a maxheap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # Swap
        heapify(arr, i, 0)

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("Sorted array is:", arr)
