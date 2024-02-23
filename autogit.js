class Stack {
  constructor() {
    this.stack = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the element at the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Return the element at the top of the stack
  peek() {
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

  // Print the stack elements
  print() {
    console.log(this.stack);
  }
}

// Example Usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print(); // Output: [1, 2, 3]

console.log(stack.pop()); // Output: 3

console.log(stack.peek()); // Output: 2

console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 2

console.log(stack.pop()); // Output: 1

console.log(stack.pop()); // Output: Stack is empty
