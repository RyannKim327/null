function selectionSort(arr) {
   for(let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      
      for(let j = i + 1; j < arr.length; j++) {
         if(arr[j] < arr[minIndex]) {
            minIndex = j;
         }
      }
      
      if(minIndex !== i) {
         // Swap elements
         let temp = arr[i];
         arr[i] = arr[minIndex];
         arr[minIndex] = temp;
      }
   }
   
   return arr;
}

// Example usage:
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
