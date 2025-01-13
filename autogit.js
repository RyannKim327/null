int binarySearch(int arr[], int target, int low, int high) {
    if (low > high) {
        return -1; // not found
    }

    int mid = (low + high) / 2;

    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
int binarySearch(int arr[], int target, int low, int high) {
    if (low > high) {
        return -1; // not found
    }

    int mid = (low + high) / 2;

    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
public int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) {
        return -1; // not found
    }

    int mid = (low + high) / 2;

    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
def binarySearch(arr, target, low, high):
    if low > high:
        return -1  # not found

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binarySearch(arr, target, mid + 1, high)
    else:
        return binarySearch(arr, target, low, mid - 1)
function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1; // not found
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
func binarySearch(_ arr: [Int], _ target: Int, _ low: Int, _ high: Int) -> Int {
    if low > high {
        return -1  // not found
    }

    let mid = (low + high) / 2

    if arr[mid] == target {
        return mid
    } else if arr[mid] < target {
        return binarySearch(arr, target, mid + 1, high)
    } else {
        return binarySearch(arr, target, low, mid - 1)
    }
}
