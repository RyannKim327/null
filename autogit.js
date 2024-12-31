def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    queue = [[item] for item in arr]

    while len(queue) > 1:
        first = queue.pop(0)
        second = queue.pop(0)

        merged = []
        i = j = 0

        while i < len(first) and j < len(second):
            if first[i] < second[j]:
                merged.append(first[i])
                i += 1
            else:
                merged.append(second[j])
                j += 1

        while i < len(first):
            merged.append(first[i])
            i += 1

        while j < len(second):
            merged.append(second[j])
            j += 1

        queue.append(merged)

    return queue[0]

# Test the merge sort algorithm
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print(sorted_arr)
