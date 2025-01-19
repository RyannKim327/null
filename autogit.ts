function areAnagrams(str1: string, str2: string): boolean {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
function areAnagrams(str1: string, str2: string): boolean {
  return str1.localeCompare(str2, 'en', { sensitivity: 'base' }) === 0;
}
function areAnagrams(str1: string, str2: string): boolean {
  return str1.split('').every(c => str2.includes(c)) && str2.split('').every(c => str1.includes(c));
}
