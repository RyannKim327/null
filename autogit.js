function mergeSort(arr) {
    const n = arr.length;
    
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n - 1; left += 2 * size) {
            const middle = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);
            
            merge(arr, left, middle, right);
        }
    }
    
    return arr;
}

function merge(arr, left, middle, right) {
    const n1 = middle - left + 1;
	const n2 = right - middle;
	
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < n1; i++) {
		leftArr[i] = arr[left + i];
	}
	
	for (let j = 0; j < n2; j++) {
		rightArr[j] = arr[middle + 1 + j];
	}

	let i = 0;
	let j = 0;
	let k = left;

	while (i < n1 && j < n2) {
		if (leftArr[i] <= rightArr[j]) {
			arr[k] = leftArr[i];
			i++;
		} else {
			arr[k] = rightArr[j];
			j++;
		}
		k++;
	}

	while (i < n1) {
		arr[k] = leftArr[i];
		i++;
		k++;
	}

	while (j < n2) {
		arr[k] = rightArr[j];
		j++;
		k++;
	}
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr));
