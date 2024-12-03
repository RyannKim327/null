arr = [1, 2, 3, 4, 5]
element_to_remove = 3

if element_to_remove in arr:
    arr.remove(element_to_remove)

print(arr)
arr = [1, 2, 3, 4, 5]
index_to_remove = 2

if index_to_remove < len(arr):
    arr.pop(index_to_remove)

print(arr)
