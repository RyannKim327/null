function findCommonElements(array1, array2):
    commonElements = []
    for element in array1:
        if element in array2:
            commonElements.append(element)
    return commonElements

array1 = [1, 2, 3, 4, 5]
array2 = [3, 4, 5, 6, 7]
result = findCommonElements(array1, array2)
print(result)
