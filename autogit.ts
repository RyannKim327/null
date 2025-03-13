function removeVowels(str: string): string {
    return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels('hello world')); // Output: 'hll wrld'
function removeVowels(str: string): string {
    return str.split('')
              .filter(char => !/[aeiou]/i.test(char))
              .join('');
}

console.log(removeVowels('hello world')); // Output: 'hll wrld'
function removeVowels(str: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return str.split('')
              .filter(char => !vowels.has(char))
              .join('');
}

console.log(removeVowels('hello world')); // Output: 'hll wrld'
const removeVowels = (str: string) => str.replace(/[aeiou]/gi, '');
