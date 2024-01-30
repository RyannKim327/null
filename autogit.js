class Stack {
  constructor() {
    this.items = []; // The array to store stack elements
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.items.length === 0) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  // Get the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Print the stack elements
  print() {
    console.log(this.items.toString());
  }
}

// Usage example:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
stack.print(); // Output: 10, 20
