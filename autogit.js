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

    return candidate

def check_majority_element(nums, candidate):
    count = 0

    for num in nums:
        if num == candidate:
            count += 1

    if count > len(nums) // 2:
        return candidate
    else:
        return None

# Example usage
nums = [2, 2, 1, 1, 1, 2, 2]
majority_candidate = find_majority_element(nums)

if majority_candidate is not None:
    result = check_majority_element(nums, majority_candidate)
    if result is None:
        print("No majority element found")
    else:
        print("Majority element is:", result)
else:
    print("No majority element found")
