def longestIncreasingSubsequence(arr):
    n = len(arr)
    lis = [1] * n

    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j]:
                lis[i] = max(lis[i], lis[j] + 1)

    max_length = max(lis)
    sequence = []
    end_index = lis.index(max_length)

    for i in range(end_index, -1, -1):
        if lis[i] == max_length:
            sequence.insert(0, arr[i])
            max_length -= 1

    return sequence

# Example Usage
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print(longestIncreasingSubsequence(arr))
