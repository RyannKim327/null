class Stack {
  constructor() {
    this.stack = [];
  }

  // Add an element to the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the topmost element from the stack
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    } else {
      throw new Error("Stack is empty");
    }
  }

  // Return the topmost element in the stack without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      throw new Error("Stack is empty");
    }
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
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

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.size()); // Output: 3

console.log(stack.peek()); // Output: 15

console.log(stack.pop()); // Output: 15

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 10

console.log(stack.pop()); // Output: 5

console.log(stack.isEmpty()); // Output: true
