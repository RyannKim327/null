def find_majority_element(nums):
    candidate = None
    count = 0

    for num in nums:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1

    count_candidate = nums.count(candidate)

    if count_candidate > len(nums) // 2:
        return candidate
    else:
        return None

# Test the function
nums = [3, 3, 4, 2, 4, 4, 2, 4, 4]
print(find_majority_element(nums))  # Output: 4
