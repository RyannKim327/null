public int findKthSmallest(int[] arr, int k) {
    Arrays.sort(arr);
    return arr[k - 1];
}
def find_kth_smallest(arr, k):
    arr.sort()
    return arr[k - 1]
int findKthSmallest(int arr[], int n, int k) {
    sort(arr, arr + n);
    return arr[k - 1];
}
function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}
public int FindKthSmallest(int[] arr, int k) {
    Array.Sort(arr);
    return arr[k - 1];
}
public int findKthSmallest(int[] arr, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>();
    for (int num : arr) {
        heap.add(num);
    }
    for (int i = 0; i < k - 1; i++) {
        heap.poll();
    }
    return heap.poll();
}
int findKthSmallest(int arr[], int n, int k) {
    int pivot = partition(arr, 0, n - 1);
    if (k - 1 == pivot) {
        return arr[k - 1];
    } else if (k - 1 < pivot) {
        return findKthSmallest(arr, pivot, k);
    } else {
        return findKthSmallest(arr + pivot + 1, n - pivot - 1, k - pivot - 1);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}
