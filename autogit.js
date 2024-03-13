class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Peek the top element of the stack
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
const myStack = new Stack();

myStack.push(3);
myStack.push(7);
myStack.push(10);
myStack.print(); // Output: [3, 7, 10]

console.log(myStack.pop()); // Output: 10
console.log(myStack.peek()); // Output: 7
console.log(myStack.size()); // Output: 2
