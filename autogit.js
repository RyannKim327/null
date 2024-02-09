class Stack {
  constructor() {
    this.stack = []; // Array to store stack elements
  }
  
  // Add an element to the stack
  push(element) {
    this.stack.push(element);
  }
  
  // Remove the top element from the stack and return it
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }
  
  // Get the top element of the stack without removing it
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
  print() {
    console.log(this.stack);
  }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack size:", stack.size()); // Output: 3

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2

stack.print(); // Output: [1, 2]
