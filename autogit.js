import random

def quickselect(arr, k):
    if not arr:
        return None
    
    pivot = random.choice(arr)
    smaller = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    larger = [x for x in arr if x > pivot]
    
    if k <= len(smaller):
        return quickselect(smaller, k)
    elif k <= len(smaller) + len(equal):
        return pivot
    else:
        return quickselect(larger, k - len(smaller) - len(equal))

# Example usage
arr = [3, 1, 4, 2, 5]
k = 3
result = quickselect(arr, k)
print(result)
