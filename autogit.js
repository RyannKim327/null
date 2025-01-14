void merge_sort_iterative(int arr[], int n) {
    int width = 1;

    while (width < n) {
        int left = 0;
        while (left < n) {
            int mid = left + width;
            int right = mid + width;
            if (right > n) right = n;
            merge(arr, left, mid, right);
            left = left + 2 * width;
        }
        width = 2 * width;
    }
}

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left;
    int n2 = right - mid;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int i = 0; i < n2; i++) R[i] = arr[mid + i];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
void mergeSortIterative(int arr[], int n) {
    int width = 1;

    while (width < n) {
        int left = 0;
        while (left < n) {
            int mid = left + width;
            int right = mid + width;
            if (right > n) right = n;
            merge(arr, left, mid, right);
            left = left + 2 * width;
        }
        width = 2 * width;
    }
}

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left;
    int n2 = right - mid;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int i = 0; i < n2; i++) R[i] = arr[mid + i];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
public static void mergeSortIterative(int[] arr) {
    int width = 1;

    while (width < arr.length) {
        int left = 0;
        while (left < arr.length) {
            int mid = left + width;
            int right = mid + width;
            if (right > arr.length) right = arr.length;
            merge(arr, left, mid, right);
            left = left + 2 * width;
        }
        width = 2 * width;
    }
}

public static void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left;
    int n2 = right - mid;
    int[] L = new int[n1];
    int[] R = new int[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int i = 0; i < n2; i++) R[i] = arr[mid + i];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
def merge_sort_iterative(arr):
    width = 1

    while width < len(arr):
        left = 0
        while left < len(arr):
            mid = left + width
            right = mid + width
            if right > len(arr): right = len(arr)
            merge(arr, left, mid, right)
            left = left + 2 * width
        width = 2 * width

def merge(arr, left, mid, right):
    n1 = mid - left
    n2
