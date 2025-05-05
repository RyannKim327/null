function getStringLength(str: string): number {
  let length = 0;
  for (const char of str) {
    length++;
  }
  return length;
}
function getStringLength(str: string): number {
  let length = 0;
  while(str[length] !== undefined) {
    length++;
  }
  return length;
}
