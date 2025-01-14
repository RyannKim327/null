int maxSubArraySum(int arr[], int size) {
    int max_so_far = arr[0];
    int curr_max = arr[0];

    for (int i = 1; i < size; i++) {
        curr_max = max(arr[i], curr_max + arr[i]);
        max_so_far = max(max_so_far, curr_max);
    }

    return max_so_far;
}
def max_subarray_sum(arr):
    max_so_far = arr[0]
    curr_max = arr[0]

    for num in arr[1:]:
        curr_max = max(num, curr_max + num)
        max_so_far = max(max_so_far, curr_max)

    return max_so_far
public int maxSubArraySum(int[] arr) {
    int maxSoFar = arr[0];
    int currMax = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currMax = Math.max(arr[i], currMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
    }

    return maxSoFar;
}
function maxSubarraySum(arr) {
    let maxSoFar = arr[0];
    let currMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currMax = Math.max(arr[i], currMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
    }

    return maxSoFar;
}
