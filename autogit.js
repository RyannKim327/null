class Stack {
  constructor() {
    this.stack = []; // Initialize an empty array as the stack
  }

  // Add an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    } else {
      console.log('Stack is empty.');
    }
  }

  // Return the top element of the stack without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      console.log('Stack is empty.');
    }
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the number of elements in the stack
  size() {
    return this.stack.length;
  }

  // Print the stack elements
  print() {
    console.log(this.stack);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();     // Output: [10, 20, 30]
console.log(stack.pop());   // Output: 30
console.log(stack.peek());  // Output: 20
console.log(stack.size());  // Output: 2
