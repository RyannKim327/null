function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   // Add implementation here
}
function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1;
   }
   // Continue implementation here
}
function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1;
   }
   
   // Calculate the position
   const pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));

   // Continue implementation here
}
function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1;
   }
   
   const pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));

   if (pos >= low && pos <= high && arr[pos] === value) {
      return pos;
   }

   // Continue implementation here
}
function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1;
   }
   
   const pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));

   if (pos >= low && pos <= high && arr[pos] === value) {
      return pos;
   }

   if (value < arr[pos]) {
      return interpolationSearch(arr, value, low, pos - 1);
   }

   // Continue implementation here
}
function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1;
   }
   
   const pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));

   if (pos >= low && pos <= high && arr[pos] === value) {
      return pos;
   }

   if (value < arr[pos]) {
      return interpolationSearch(arr, value, low, pos - 1);
   }

   if (value > arr[pos]) {
      return interpolationSearch(arr, value, pos + 1, high);
   }

   // Continue implementation here
}
function interpolationSearch(arr, value, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1;
   }
   
   const pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));

   if (pos >= low && pos <= high && arr[pos] === value) {
      return pos;
   }

   if (value < arr[pos]) {
      return interpolationSearch(arr, value, low, pos - 1);
   }

   if (value > arr[pos]) {
      return interpolationSearch(arr, value, pos + 1, high);
   }

   return -1;
}
