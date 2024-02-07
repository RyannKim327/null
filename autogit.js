class Stack {
  constructor() {
    this.items = []; // The array to store stack elements
  }
}
push(element) {
  this.items.push(element);
}
pop() {
  if (this.isEmpty()) {
    return "Stack is empty!";
  }
  return this.items.pop();
}
peek() {
  return this.items[this.items.length - 1];
}
isEmpty() {
  return this.items.length === 0;
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
