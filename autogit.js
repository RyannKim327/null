def merge_sort_iterative(arr):
    # Split the array into individual elements as subarrays
    arr = [[x] for x in arr]

    # Merge neighboring arrays in a bottom-up manner
    while len(arr) > 1:
        tmp = []
        for i in range(0, len(arr) - 1, 2):
            tmp.append(merge(arr[i], arr[i + 1]))
        if len(arr) % 2 == 1:
            tmp.append(arr[-1])
        arr = tmp

    return arr[0]

def merge(arr1, arr2):
    result = []
    while arr1 and arr2:
        if arr1[0] < arr2[0]:
            result.append(arr1.pop(0))
        else:
            result.append(arr2.pop(0))
    result += arr1 + arr2
    return result

# Test the merge sort algorithm
arr = [38, 27, 43, 3, 9, 82, 10]
result = merge_sort_iterative(arr)
print(result)
