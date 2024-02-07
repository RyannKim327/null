class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element without removing it from the stack
  peek() {
    if (this.isEmpty()) {
      return "No element in the stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());   // Output: 30
console.log(stack.peek());  // Output: 20
console.log(stack.size());  // Output: 2
console.log(stack.isEmpty());  // Output: false
stack.clear();
console.log(stack.isEmpty());  // Output: true
