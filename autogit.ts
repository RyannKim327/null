function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}
function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}
