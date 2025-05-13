const removeVowels = (str: string): string => str.replace(/[aeiou]/gi, '');
console.log(removeVowels("Hello World!")); // "Hll Wrld!"
