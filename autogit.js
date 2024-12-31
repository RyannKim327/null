original_array = [1, 2, 3, 1, 2, 4, 5]
unique_array = list(set(original_array))
print(unique_array)
let originalArray = [1, 2, 3, 1, 2, 4, 5];
let uniqueArray = [...new Set(originalArray)];
console.log(uniqueArray);
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Integer[] originalArray = {1, 2, 3, 1, 2, 4, 5};
        List<Integer> uniqueList = new ArrayList<>(new HashSet<>(Arrays.asList(originalArray)));
        System.out.println(uniqueList);
    }
}
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>

int main() {
    std::vector<int> originalArray = {1, 2, 3, 1, 2, 4, 5};
    std::unordered_set<int> uniqueSet(originalArray.begin(), originalArray.end());
    originalArray.assign(uniqueSet.begin(), uniqueSet.end());
    
    for (int num : originalArray) {
        std::cout << num << " ";
    }
    
    return 0;
}
