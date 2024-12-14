def longest_increasing_subsequence(arr):
    n = len(arr)
    lis = [1] * n

    for i in range(1, n):
        for j in range(0, i):
            if arr[i] > arr[j]:
                lis[i] = max(lis[i], lis[j] + 1)

    max_length = max(lis)
    subsequence = []
    index = lis.index(max_length)

    while max_length > 0:
        subsequence.insert(0, arr[index])
        max_length -= 1
        for i in range(index - 1, -1, -1):
            if lis[i] == max_length and arr[i] < arr[index]:
                index = i
                break

    return subsequence

# Test the function
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print(longest_increasing_subsequence(arr))
