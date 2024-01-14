class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element in the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Remove all elements from the stack
  clear() {
    this.items = [];
  }
}

// Usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2

console.log(stack.size()); // Output: 1

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
