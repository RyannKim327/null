def find_common_elements(arr1, arr2):
    common_elements = []
    for element in arr1:
        if element in arr2 and element not in common_elements:
            common_elements.append(element)
    return common_elements

# Example usage
array1 = [1, 2, 3, 4, 5]
array2 = [3, 4, 5, 6, 7]
result = find_common_elements(array1, array2)
print(result)
