const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const commonElements = arr1.filter(element => arr2.includes(element));
console.log(commonElements); // [4, 5]
arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]

common_elements = [element for element in arr1 if element in arr2]
print(common_elements)  # [4, 5]
int[] arr1 = {1, 2, 3, 4, 5};
int[] arr2 = {4, 5, 6, 7, 8};

List<Integer> commonElements = new ArrayList<>();
for (int element : arr1) {
    if (Arrays.asList(arr2).contains(element)) {
        commonElements.add(element);
    }
}
System.out.println(commonElements); // [4, 5]
#include <vector>
#include <algorithm>

std::vector<int> arr1 = {1, 2, 3, 4, 5};
std::vector<int> arr2 = {4, 5, 6, 7, 8};

std::vector<int> commonElements;
std::set_intersection(arr1.begin(), arr1.end(), arr2.begin(), arr2.end(),
                       std::back_inserter(commonElements));
std::cout << "[";
for (int element : commonElements) {
    std::cout << element << " ";
}
std::cout << "]\n"; // [4 5]
arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]

common_elements = arr1 & arr2
puts common_elements.inspect  # [4, 5]
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [4, 5, 6, 7, 8]

let commonElements = arr1.filter { arr2.contains($0) }
print(commonElements) // [4, 5]
