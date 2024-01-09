class Stack {
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the stack
  push(item) {
    this.stack.push(item);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Get the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stack.length;
  }

  // Clear the entire stack
  clear() {
    this.stack = [];
  }
}

// Usage:
const stack = new Stack();

stack.push(1); // Add an element to the top of the stack
stack.push(2);
stack.push(3);

console.log(stack.size()); // 3

console.log(stack.pop()); // 3 (last-in, first-out)
console.log(stack.pop()); // 2

console.log(stack.peek()); // 1 (top element)

console.log(stack.isEmpty()); // false

stack.clear(); // Clear the stack
console.log(stack.isEmpty()); // true
