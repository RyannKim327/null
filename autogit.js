function largestPrimeFactor(number) {
   // your logic goes here
}
let factor = 2;
while (factor <= number) {
   // your logic goes here
}
while (factor <= number) {
   if (number % factor === 0) {
      number /= factor;
   } else {
      factor++;
   }
}
return factor;
function largestPrimeFactor(number) {
   let factor = 2;

   while (factor <= number) {
      if (number % factor === 0) {
         number /= factor;
      } else {
         factor++;
      }
   }

   return factor;
}
console.log(largestPrimeFactor(13195));  // Output: 29
