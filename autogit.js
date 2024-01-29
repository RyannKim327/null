class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, cannot pop an element.";
    }
    return this.stackArray.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty, nothing to peek.";
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

  // Print the stack elements
  print() {
    console.log(this.stackArray);
  }
}

// Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.isEmpty()); // Output: false
stack.print(); // Output: [10, 20]
