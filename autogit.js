def merge_sort_iterative(arr):
    n = len(arr)
    curr_size = 1
    
    while curr_size < n - 1:
        left = 0
        
        while left < n - 1:
            mid = min(left + curr_size - 1, n - 1)
            right = min(left + 2 * curr_size - 1, n - 1)
            
            merge(arr, left, mid, right)
            left += 2 * curr_size
        
        curr_size = 2 * curr_size
    
    return arr

def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m
    
    L = [arr[l + i] for i in range(n1)]
    R = [arr[m + 1 + i] for i in range(n2)]
    
    i = j = 0
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

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
result = merge_sort_iterative(arr)
print(result)
