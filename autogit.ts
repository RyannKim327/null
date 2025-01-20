function getStringLength(str: string): number {
  let length = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }
  return length;
}
function getStringLength(str: string): number {
  let length = 0;
  let i = 0;
  while (str[i] !== undefined) {
    length++;
    i++;
  }
  return length;
}
function getStringLength(str: string, index: number = 0): number {
  if (str[index] === undefined) {
    return index;
  }
  return getStringLength(str, index + 1);
}
