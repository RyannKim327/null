class Stack {
  constructor() {
    this.stack = [];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Push an element onto the stack
  push(item) {
    this.stack.push(item);
  }

  // Remove and return the most recently added element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Return the size of the stack
  size() {
    return this.stack.length;
  }

  // Return the most recently added element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());    // Output: 3
console.log(stack.pop());    // Output: 2
console.log(stack.peek());   // Output: 1
console.log(stack.size());   // Output: 1
console.log(stack.isEmpty()); // Output: false
