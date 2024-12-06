arr = [1, 2, 3, 4, 5]
reversed_arr = arr[::-1]
print(reversed_arr)
let arr = [1, 2, 3, 4, 5];
let reversedArr = arr.reverse();
console.log(reversedArr);
import java.util.Arrays;
import java.util.Collections;

Integer[] arr = {1, 2, 3, 4, 5};
Collections.reverse(Arrays.asList(arr));
System.out.println(Arrays.toString(arr));
#include <iostream>
#include <algorithm>
#include <vector>

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    std::reverse(arr.begin(), arr.end());
    for(int i : arr) {
        std::cout << i << " ";
    }
    return 0;
}
