class Stack {
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Return the number of elements in the stack
  size() {
    return this.stack.length;
  }

  // Clear the stack
  clear() {
    this.stack = [];
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
