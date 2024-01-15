function binarySearch(array, target, low = 0, high = array.length - 1) {
  // ...
}
function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }
}
function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
}
function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  const midValue = array[mid];

  if (midValue === target) {
    return mid;
  }
}
function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  const midValue = array[mid];

  if (midValue === target) {
    return mid;
  } else if (midValue > target) {
    return binarySearch(array, target, low, mid - 1);
  }
}
function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  const midValue = array[mid];

  if (midValue === target) {
    return mid;
  } else if (midValue > target) {
    return binarySearch(array, target, low, mid - 1);
  } else {
    return binarySearch(array, target, mid + 1, high);
  }
}
function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  const midValue = array[mid];

  if (midValue === target) {
    return mid;
  } else if (midValue > target) {
    return binarySearch(array, target, low, mid - 1);
  } else {
    return binarySearch(array, target, mid + 1, high);
  }
}
