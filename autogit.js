class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element to the top of the stack
  push(item) {
    this.stack.push(item);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack.pop();
  }

  // Return the top element in the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.stack.length;
  }

  // Clear the stack
  clear() {
    this.stack = [];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top of the stack:", stack.peek()); // Output: 30

console.log("Popped item:", stack.pop()); // Output: 30

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Size of stack:", stack.size()); // Output: 2

stack.clear();
console.log("Is stack empty?", stack.isEmpty()); // Output: true
