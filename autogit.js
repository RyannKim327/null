def longest_increasing_subsequence(arr):
    n = len(arr)
    lis = [1] * n

    for i in range(1, n):
        for j in range(0, i):
            if arr[i] > arr[j] and lis[i] < lis[j] + 1:
                lis[i] = lis[j] + 1

    max_length = max(lis)
    idx = lis.index(max_length)

    seq = [arr[idx]]
    max_length -= 1

    for i in range(idx - 1, -1, -1):
        if lis[i] == max_length:
            seq = [arr[i]] + seq
            max_length -= 1

    return seq

# Test the function
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print(longest_increasing_subsequence(arr))
