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
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
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

  // Print the stack
  print() {
    console.log(this.stack);
  }
}

// Usage:
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
stack.print(); // Output: [5, 10, 15]
console.log(stack.peek()); // Output: 15
console.log(stack.pop()); // Output: 15
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true
