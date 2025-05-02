function areAnagrams(str1: string, str2: string): boolean {
  // Remove spaces and convert to lowercase to handle case and spacing
  const normalize = (str: string) => str.replace(/\s+/g, "").toLowerCase();

  const sortedStr1 = normalize(str1).split("").sort().join("");
  const sortedStr2 = normalize(str2).split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("Dormitory", "Dirty room")); // true
