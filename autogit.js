from collections import Counter

def majority_element(arr):
    n = len(arr)
    count = Counter(arr)
    
    for key, value in count.items():
        if value > n / 2:
            return key
    
    return None

# Example usage
arr = [1, 2, 2, 2, 3, 2, 4, 2, 2]
print(majority_element(arr))
