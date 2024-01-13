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
      return "Stack is Empty";
    }
    return this.stackArray.pop();
  }

  // Return the top element without removing it from the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stackArray[this.stackArray.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Clear the stack
  clear() {
    this.stackArray = [];
  }
}

// Example usage:
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop()); // Output: 15
console.log(stack.peek()); // Output: 10

console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
