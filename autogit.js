def merge_sort_iterative(arr):
    n = len(arr)
    width = 1
    
    while width < n:
        left = 0
        while left < n:
            mid = left + width
            right = min(left + 2*width, n)
            merged = merge(arr[left:mid], arr[mid:right])
            arr[left:right] = merged
            left += 2*width
        
        width *= 2

def merge(left, right):
    result = []
    i, j = 0, 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
merge_sort_iterative(arr)
print(arr)
