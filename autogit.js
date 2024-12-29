#include <iostream>
#include <algorithm>

int findKthSmallest(int arr[], int n, int k) {
    std::nth_element(arr, arr + k - 1, arr + n);
    return arr[k - 1];
}

int main() {
    int arr[] = {4, 2, 7, 1, 5, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 3; // Find the 3rd smallest element

    int kthSmallest = findKthSmallest(arr, n, k);

    std::cout << "The " << k << "th smallest element is: " << kthSmallest << std::endl;

    return 0;
}
