class Stack {
  constructor() {
    this.stack = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Removes and returns the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  // Returns the size of the stack
  size() {
    return this.stack.length;
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.size() === 0;
  }

  // Clears the stack
  clear() {
    this.stack = [];
  }
}

// Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
