function longestCommonPrefix(strings) {
   if (strings.length === 0) return '';
   if (strings.length === 1) return strings[0];

   let prefix = strings[0];

   for (let i = 0; i < prefix.length; i++) {
      for (let j = 1; j < strings.length; j++) {
         if (i >= strings[j].length || strings[j][i] !== prefix[i]) {
            return prefix;
         }
      }
      prefix += strings[0][i];
   }

   return prefix;
}
const strings = ['apple', 'ape', 'apricot'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'ap'
