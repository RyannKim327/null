from collections import Counter

def find_majority_element(arr):
    counts = Counter(arr)
    for num, count in counts.items():
        if count > len(arr) // 2:
            return num
    return None

# Example usage
arr = [2, 2, 3, 4, 2, 2, 2]
result = find_majority_element(arr)
if result:
    print(f"The majority element is: {result}")
else:
    print("No majority element found.")
