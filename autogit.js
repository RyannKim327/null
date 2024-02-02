class Stack {
  constructor() {
    this.stack = []; // Create an empty array to represent the stack
  }

  push(item) {
    this.stack.push(item); // Add an item to the top of the stack
  }

  pop() {
    if (this.isEmpty()) {
      return null; // Return null if the stack is empty
    }
    return this.stack.pop(); // Remove and return the item from the top of the stack
  }

  isEmpty() {
    return this.stack.length === 0; // Check if the stack is empty
  }

  peek() {
    if (this.isEmpty()) {
      return null; // Return null if the stack is empty
    }
    return this.stack[this.stack.length - 1]; // Return the item at the top of the stack without removing it
  }

  size() {
    return this.stack.length; // Return the number of items in the stack
  }

  clear() {
    this.stack = []; // Clear the stack
  }
}

// Example usage
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.peek()); // Output: 15

console.log(stack.pop()); // Output: 15
console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: 5
console.log(stack.pop()); // Output: null

console.log(stack.isEmpty()); // Output: true
console.log(stack.size()); // Output: 0
