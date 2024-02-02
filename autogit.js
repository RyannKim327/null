class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
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

  // Empty the stack
  clear() {
    this.items = [];
  }
}

// Example usage
let stack = new Stack();
stack.push(10); // Add elements to the stack
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30 (top element)
console.log(stack.pop()); // Output: 30 (remove top element)
console.log(stack.size()); // Output: 2 (remaining elements in stack)
console.log(stack.isEmpty()); // Output: false (stack is not empty)
stack.clear(); // Remove all elements from the stack
console.log(stack.isEmpty()); // Output: true (stack is empty)
