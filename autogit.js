class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the topmost element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    return this.stack.pop();
  }

  // Return the topmost element without removing it
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

  // Print the stack elements
  print() {
    console.log(this.stack);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.print(); // [10, 20, 30, 40]
console.log(stack.pop()); // 40
console.log(stack.peek()); // 30
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
