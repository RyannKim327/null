function interpolationSearch(arr, target, comparator) {
  // ...
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  // ...
}

function defaultComparator(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  // ...
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  
  // Search loop
  while (low <= high) {
    // ...
  }
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  
  // Search loop
  while (low <= high) {
    const valueRange = comparator(arr[high], arr[low]);
    const indexRange = high - low;
    const interpolationRatio = (target - arr[low]) / (arr[high] - arr[low]);

    // Calculate the probable position using interpolation
    const interpolPos = low + Math.floor(indexRange * interpolationRatio);
    // ...
  }
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  
  // Search loop
  while (low <= high) {
    const valueRange = comparator(arr[high], arr[low]);
    const indexRange = high - low;
    const interpolationRatio = (target - arr[low]) / (arr[high] - arr[low]);

    // Calculate the probable position using interpolation
    const interpolPos = low + Math.floor(indexRange * interpolationRatio);
    
    // If probable position is out of bounds, break
    if (interpolPos < low || interpolPos > high) {
      break;
    }
    // ...
  }
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  
  // Search loop
  while (low <= high) {
    const valueRange = comparator(arr[high], arr[low]);
    const indexRange = high - low;
    const interpolationRatio = (target - arr[low]) / (arr[high] - arr[low]);

    // Calculate the probable position using interpolation
    const interpolPos = low + Math.floor(indexRange * interpolationRatio);
    
    // If probable position is out of bounds, break
    if (interpolPos < low || interpolPos > high) {
      break;
    }
    
    // Compare the target value with the element at probable position
    const cmp = comparator(arr[interpolPos], target);
    if (cmp === 0) {
      position = interpolPos;
      break;
    }
    // ...
  }
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  
  // Search loop
  while (low <= high) {
    const valueRange = comparator(arr[high], arr[low]);
    const indexRange = high - low;
    const interpolationRatio = (target - arr[low]) / (arr[high] - arr[low]);

    // Calculate the probable position using interpolation
    const interpolPos = low + Math.floor(indexRange * interpolationRatio);
    
    // If probable position is out of bounds, break
    if (interpolPos < low || interpolPos > high) {
      break;
    }
    
    // Compare the target value with the element at probable position
    const cmp = comparator(arr[interpolPos], target);
    if (cmp === 0) {
      position = interpolPos;
      break;
    } else if (cmp < 0) {
      low = interpolPos + 1;
    } else {
      high = interpolPos - 1;
    }
  }
  // ...
}
function interpolationSearch(arr, target, comparator) {
  comparator = comparator || defaultComparator;
  let low = 0;
  let high = arr.length - 1;
  let position = -1;
  
  // Search loop
  while (low <= high) {
    const valueRange = comparator(arr[high], arr[low]);
    const indexRange = high - low;
    const interpolationRatio = (target - arr[low]) / (arr[high] - arr[low]);

    // Calculate the probable position using interpolation
    const interpolPos = low + Math.floor(indexRange * interpolationRatio);
    
    // If probable position is out of bounds, break
    if (interpolPos < low || interpolPos > high) {
      break;
    }
    
    // Compare the target value with the element at probable position
    const cmp = comparator(arr[interpolPos], target);
    if (cmp === 0) {
      position = interpolPos;
      break;
    } else if (cmp < 0) {
      low = interpolPos + 1;
    } else {
      high = interpolPos - 1;
    }
  }
  
  return position;
}
