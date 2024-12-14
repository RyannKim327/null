function findCommonElements(array1, array2) {
    let commonElements = [];

    for each element in array1 {
        if array2 contains element {
            commonElements.add(element);
        }
    }

    return commonElements;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let result = findCommonElements(array1, array2);
print(result); // Output: [3, 4, 5]
