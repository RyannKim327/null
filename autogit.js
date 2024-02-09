class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.peek()); // Output: 15

console.log(stack.pop()); // Output: 15

console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

stack.clear();

console.log(stack.size()); // Output: 0

console.log(stack.isEmpty()); // Output: true
