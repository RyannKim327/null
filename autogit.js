class Stack {
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the stack
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

  // Return the element at the top of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
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

  // Empty the stack
  clear() {
    this.stack = [];
  }

  // Print the stack elements
  print() {
    console.log(this.stack.join(" "));
  }
}

// Example usage
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.size()); // Output: 3
console.log(stack.pop()); // Output: 15
console.log(stack.peek()); // Output: 10
stack.print(); // Output: 5 10
stack.clear();
console.log(stack.isEmpty()); // Output: true
