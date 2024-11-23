# Sorting an array of integers in Python
arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
arr.sort()
print(arr)
// Sorting an array of integers in JavaScript
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arr.sort((a, b) => a - b);
console.log(arr);
// Sorting an array of integers in Java
import java.util.Arrays;

int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));
// Sorting an array of integers in C++
#include <algorithm>
#include <iostream>

int main() {
    int arr[] = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    std::sort(arr, arr + n);
    
    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }
    
    return 0;
}
// Sorting an array of integers in C#
using System;

int[] arr = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
Array.Sort(arr);
Console.WriteLine(string.Join(" ", arr));
