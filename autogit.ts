function_strlen(str: string): number {
  let len = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    len++;
  }
  return len;
}
function_strlen(str: string): number {
  let len = 0;
  let i = 0;
  while (str[i] !== undefined) {
    len++;
    i++;
  }
  return len;
}
function_strlen(str: string): number {
  let len = 0;
  Array.prototype.forEach.call(str, () => len++);
  return len;
}
