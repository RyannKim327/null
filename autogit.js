class Stack {
  constructor() {
    this.stack = []; // array to store stack elements
  }

  // Push operation: adds an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop operation: removes and returns the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    return this.stack.pop();
  }

  // Peek operation: returns the top element of the stack without modifying the stack
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

  // Print the elements of the stack
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

stack.printStack(); // Output: [1, 2]
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
