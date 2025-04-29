function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
function reverseStringUnicode(str: string): string {
  return [...str].reverse().join('');
}
