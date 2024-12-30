def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    def merge(left, right):
        result = []
        left_index = right_index = 0
        
        while left_index < len(left) and right_index < len(right):
            if left[left_index] < right[right_index]:
                result.append(left[left_index])
                left_index += 1
            else:
                result.append(right[right_index])
                right_index += 1
        
        result.extend(left[left_index:])
        result.extend(right[right_index:])
        
        return result
    
    size = 1
    while size < len(arr):
        for i in range(0, len(arr), 2*size):
            left = arr[i:i+size]
            right = arr[i+size:i+2*size]
            arr[i:i+2*size] = merge(left, right)
        
        size *= 2
    
    return arr

# Example usage:
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print(sorted_arr)
