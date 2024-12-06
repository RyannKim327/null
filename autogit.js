def longest_increasing_subsequence(nums):
    n = len(nums)
    if n == 0:
        return 0

    lis = [1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                lis[i] = max(lis[i], lis[j] + 1)

    max_length = max(lis)
    subsequence = []
    idx = lis.index(max_length)
    subsequence.append(nums[idx])

    for i in range(idx - 1, -1, -1):
        if nums[i] < nums[idx] and lis[i] == lis[idx] - 1:
            subsequence.insert(0, nums[i])
            idx = i

    return subsequence

# Example usage
nums = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print(longest_increasing_subsequence(nums))
