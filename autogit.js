def find_majority_element(arr):
    candidate = None
    count = 0

    for num in arr:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1

    # At this point, the candidate should contain the majority element
    # Now, we need to verify if the candidate is the majority element
    count = 0
    for num in arr:
        if num == candidate:
            count += 1

    if count > len(arr) // 2:
        return candidate
    else:
        return None

# Sample usage
arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]
result = find_majority_element(arr)
if result is not None:
    print(f"The majority element is {result}.")
else:
    print("There is no majority element in the array.")
