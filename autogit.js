function fibonacciSearch(arr, value) {
   // Fibonacci numbers initialization
   let fib2 = 0; // fibonacci(n-2)
   let fib1 = 1; // fibonacci(n-1)
   let fib = fib2 + fib1; // fibonacci(n)

   // Find the smallest Fibonacci number greater than or equal to the array length
   while (fib < arr.length) {
       fib2 = fib1;
       fib1 = fib;
       fib = fib2 + fib1;
   }

   // Initialize the offset
   let offset = -1;

   // Perform the search
   while (fib > 1) {
       // Check if the current position is a valid index
       const index = Math.min(offset + fib2, arr.length - 1);

       // If the search value is smaller, move Fibonacci two steps down
       if (arr[index] > value) {
           fib = fib1;
           fib1 = fib2;
           fib2 = fib - fib1;
       }

       // If the search value is greater, move Fibonacci one step down
       else if (arr[index] < value) {
           fib = fib2;
           fib1 = fib1 - fib2;
           fib2 = fib - fib1;
           offset = index;
       }

       // If the search value is found
       else {
           return index;
       }
   }

   // If the search value is not found
   if (fib1 && arr[offset + 1] === value) {
       return offset + 1;
   }
   else {
       return -1;
   }
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const searchValue = 13;

console.log(fibonacciSearch(arr, searchValue)); // Output: 6
