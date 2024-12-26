def find_majority_element(nums):
    majority_element = None
    count = 0

    for num in nums:
        if count == 0:
            majority_element = num
            count = 1
        elif num == majority_element:
            count += 1
        else:
            count -= 1

    # Verify if majority_element appears more than n/2 times
    count = sum(1 for num in nums if num == majority_element)
    if count > len(nums) / 2:
        return majority_element
    else:
        return None  # No majority element found

# Example usage
nums = [2, 2, 1, 1, 1, 2, 2]
result = find_majority_element(nums)
print(result)  # Output: 2
