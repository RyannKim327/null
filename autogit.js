class Stack {
  constructor() {
    this.stack = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
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

  // Print the stack
  printStack() {
    console.log(this.stack);
  }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack(); // Output: [1, 2, 3]

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
