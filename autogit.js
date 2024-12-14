def longest_increasing_subsequence(array):
    if not array:
        return 0

    n = len(array)
    lis = [1] * n

    for i in range(1, n):
        for j in range(i):
            if array[i] > array[j]:
                lis[i] = max(lis[i], lis[j] + 1)

    return max(lis)

# Example
array = [10, 22, 9, 33, 21, 50, 41, 60, 80]
result = longest_increasing_subsequence(array)
print("Length of Longest Increasing Subsequence is:", result)
