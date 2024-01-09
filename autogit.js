class Stack {
  constructor() {
    this.stack = []; // Array to store stack elements
  }

  push(item) {
    this.stack.push(item); // Add element to the end of the array
  }

  pop() {
    if (this.isEmpty()) {
      return null; // Return null if stack is empty
    }
    return this.stack.pop(); // Remove and return the last element of the array
  }

  peek() {
    if (this.isEmpty()) {
      return null; // Return null if stack is empty
    }
    return this.stack[this.stack.length - 1]; // Return the last element of the array without removing
  }

  isEmpty() {
    return this.stack.length === 0; // Check if the stack is empty
  }

  size() {
    return this.stack.length; // Return the size of the stack
  }
}

// Usage:
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: 15

console.log(stack.pop()); // Output: 15
console.log(stack.pop()); // Output: 10

console.log(stack.size()); // Output: 1
