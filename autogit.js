function radixSort(arr) {
  const getMaxDigits = (arr) => {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, String(arr[i]).length);
    }
    return maxDigits;
  };

  const distributeElements = (arr, digit) => {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digitValue = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
      buckets[digitValue].push(arr[i]);
    }
    return buckets;
  };

  const collectElements = (buckets) => {
    const newArr = [];
    for (let i = 0; i < buckets.length; i++) {
      newArr.push(...buckets[i]);
    }
    return newArr;
  };

  const maxDigits = getMaxDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    const buckets = distributeElements(arr, i);
    arr = collectElements(buckets);
  }

  return arr;
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
