const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const commonElements = arr1.filter(element => arr2.includes(element));
console.log(commonElements); // [3, 4]
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

common_elements = [element for element in arr1 if element in arr2]
print(common_elements)  # [3, 4]
int[] arr1 = {1, 2, 3, 4};
int[] arr2 = {3, 4, 5, 6};

List<Integer> commonElements = new ArrayList<>();
for (int element : arr1) {
    if (Arrays.asList(arr2).contains(element)) {
        commonElements.add(element);
    }
}
System.out.println(commonElements); // [3, 4]
#include <algorithm>
#include <vector>

int main() {
    std::vector<int> arr1 = {1, 2, 3, 4};
    std::vector<int> arr2 = {3, 4, 5, 6};

    std::vector<int> commonElements;
    for (int element : arr1) {
        if (std::find(arr2.begin(), arr2.end(), element) != arr2.end()) {
            commonElements.push_back(element);
        }
    }
    for (int element : commonElements) {
        std::cout << element << " ";
    }
    std::cout << std::endl; // 3 4
    return 0;
}
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

common_elements = arr1 & arr2
puts common_elements.inspect # [3, 4]
let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

let commonElements = arr1.filter { arr2.contains($0) }
print(commonElements) // [3, 4]
