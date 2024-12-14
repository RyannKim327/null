def merge_sort(arr):
    def merge(left, right):
        result = []
        i = j = 0
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

    if len(arr) <= 1:
        return arr

    queue = [[item] for item in arr]
    while len(queue) > 1:
        queue.append(merge(queue.pop(0), queue.pop(0)))

    return queue[0]

# Example usage
arr = [7, 2, 5, 3, 1, 6, 4]
sorted_arr = merge_sort(arr)
print(sorted_arr)
