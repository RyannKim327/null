def merge_sort(arr):
    if len(arr) > 1:
        size = 1
        while size < len(arr):
            left = 0
            while left < len(arr)-1:
                mid = left + size - 1
                right = min(left + 2*size - 1, len(arr)-1)
                merge(arr, left, mid, right)
                left += 2*size
            size = 2*size

def merge(arr, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid
    L = [arr[left + i] for i in range(n1)]
    R = [arr[mid + 1 + i] for i in range(n2)]
    
    i = 0
    j = 0
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
merge_sort(arr)
print("Sorted array:", arr)
