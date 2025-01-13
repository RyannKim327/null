function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// example usage:
const arr = [1, 2, 3, 4, 5];
console.log(isSorted(arr)); // true
def is_sorted(arr):
    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))

# example usage:
arr = [1, 2, 3, 4, 5]
print(is_sorted(arr))  # True
public boolean isSorted(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

// example usage:
int[] arr = {1, 2, 3, 4, 5};
System.out.println(isSorted(arr)); // true
bool isSorted(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

// example usage:
int arr[] = {1, 2, 3, 4, 5};
int n = sizeof(arr) / sizeof(arr[0]);
std::cout << isSorted(arr, n) << std::endl; // true
def is_sorted(arr)
  arr.each_cons(2).all? { |a, b| a <= b }
end

# example usage:
arr = [1, 2, 3, 4, 5]
puts is_sorted(arr)  # true
func isSorted(_ arr: [Int]) -> Bool {
    for i in 0..<arr.count - 1 {
        if arr[i] > arr[i + 1] { return false }
    }
    return true
}

// example usage:
let arr = [1, 2, 3, 4, 5]
print(isSorted(arr))  // true
function isSorted(array $arr) {
    for ($i = 0; $i < count($arr) - 1; $i++) {
        if ($arr[$i] > $arr[$i + 1]) return false;
    }
    return true;
}

// example usage:
$arr = [1, 2, 3, 4, 5];
echo isSorted($arr) ? 'true' : 'false';  // true
