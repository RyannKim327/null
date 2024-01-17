class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
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

  // Clear the stack
  clear() {
    this.stack.length = 0;
  }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true
