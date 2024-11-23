import random

def partition(arr, low, high):
    pivot = arr[high]
    i = low
    for j in range(low, high):
        if arr[j] <= pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[high] = arr[high], arr[i]
    return i

def quickselect(arr, k, low, high):
    if low == high:
        return arr[low]

    pivot_index = random.randint(low, high)
    arr[high], arr[pivot_index] = arr[pivot_index], arr[high]

    pivot_index = partition(arr, low, high)

    if k < pivot_index:
        return quickselect(arr, k, low, pivot_index - 1)
    elif k > pivot_index:
        return quickselect(arr, k, pivot_index + 1, high)
    else:
        return arr[k]

def find_kth_smallest(arr, k):
    if k < 1 or k > len(arr):
        return None
    return quickselect(arr, k - 1, 0, len(arr) - 1)

# Example usage
arr = [3, 1, 4, 1, 5, 9, 2, 6]
k = 3
result = find_kth_smallest(arr, k)
print(f"The {k}th smallest element is: {result}")
