class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    return this.stackArray.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stackArray[this.stackArray.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Print the stack elements
  printStack() {
    let stackElements = this.stackArray.join(", ");
    console.log(`Stack: ${stackElements}`);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack(); // Output: Stack: 10, 20, 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
