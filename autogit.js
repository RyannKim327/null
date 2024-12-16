def find_majority_element(arr):
    count = 0
    candidate = None

    for num in arr:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1

    return candidate

# Example
arr = [2, 2, 1, 1, 1, 2, 2]
majority_element = find_majority_element(arr)
print("Majority element:", majority_element)
