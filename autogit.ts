function areAnagrams(str1: string, str2: string): boolean {
  return sortString(str1) === sortString(str2);
}

function sortString(str: string): string {
  return str.split('').sort().join('');
}

const str1 = 'listen';
const str2 = 'silent';

console.log(areAnagrams(str1, str2)); // true
function sortString(str: string): string {
  return str.toLowerCase().split('').sort().join('');
}
function areAnagrams(str1: string, str2: string): boolean {
  return [...str1].every(c => str2.includes(c)) && [...str2].every(c => str1.includes(c));
}
