const stack = [];
function push(element) {
  stack.push(element);
}
function pop() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack.pop();
}
function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
}
push(10);
push(20);
push(30);
console.log(pop()); // Output: 30
console.log(peek()); // Output: 20
console.log(pop()); // Output: 20
console.log(pop()); // Output: 10
console.log(pop()); // Output: Stack is empty
