#include <stdio.h>

int find_max(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int arr[] = {3, 1, 4, 1, 5, 9, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = find_max(arr, n);
    printf("Max value: %d\n", max);
    return 0;
}
#include <iostream>
#include <algorithm>

int main() {
    int arr[] = {3, 1, 4, 1, 5, 9, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = *std::max_element(arr, arr + n);
    std::cout << "Max value: " << max << std::endl;
    return 0;
}
public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9, 2};
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println("Max value: " + max);
    }
}
arr = [3, 1, 4, 1, 5, 9, 2]
max_value = max(arr)
print("Max value:", max_value)
const arr = [3, 1, 4, 1, 5, 9, 2];
const max = Math.max(...arr);
console.log("Max value:", max);
arr = [3, 1, 4, 1, 5, 9, 2]
max_value = arr.max
puts "Max value: #{max_value}"
let arr = [3, 1, 4, 1, 5, 9, 2]
let max = arr.max()!
print("Max value: \(max)")
