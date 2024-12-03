#include <iostream>
#include <vector>
#include <algorithm>

std::vector<int> findCommonElements(std::vector<int> arr1, std::vector<int> arr2) {
    std::vector<int> commonElements;
    
    for (int i = 0; i < arr1.size(); i++) {
        if (std::find(arr2.begin(), arr2.end(), arr1[i]) != arr2.end()) {
            commonElements.push_back(arr1[i]);
        }
    }
    
    return commonElements;
}

int main() {
    std::vector<int> array1 = {1, 2, 3, 4, 5};
    std::vector<int> array2 = {3, 4, 5, 6, 7};
    
    std::vector<int> result = findCommonElements(array1, array2);
    
    std::cout << "Common elements: ";
    for (int element : result) {
        std::cout << element << " ";
    }
    
    return 0;
}
