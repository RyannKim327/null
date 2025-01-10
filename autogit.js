fn quick_sort(arr: &mut [i32]) {
    if arr.len() <= 1 {
        return;
    }

    let pivot = arr[arr.len() / 2];
    let mut left = 0;
    let mut right = arr.len() - 1;

    while left <= right {
        while arr[left] < pivot {
            left += 1;
        }
        while arr[right] > pivot {
            right -= 1;
        }

        if left <= right {
            arr.swap(left, right);
            left += 1;
            right -= 1;
        }
    }

    quick_sort(&mut arr[..left]);
    quick_sort(&mut arr[left..]);
}
