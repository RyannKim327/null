class Stack {
  constructor() {
    this.stack = [];
  }

  // Push element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Peek at the top element of the stack
  peek() {
    return this.isEmpty() ? "Stack is empty" : this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stack.length;
  }

  // Print the stack elements
  print() {
    console.log(this.stack);
  }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: [1, 2, 3]
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
stack.print(); // Output: [1, 2]
console.log(stack.isEmpty()); // Output: false
