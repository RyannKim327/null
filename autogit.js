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
      return "Stack is empty";
    }
    return this.stackArray.pop();
  }

  // Get the top element of the stack without removing it
  peek() {
    return this.stackArray[this.stackArray.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Print the stack elements
  print() {
    console.log(this.stackArray);
  }
}

// Create a new stack
const stack = new Stack();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Print the stack
stack.print(); // Output: [1, 2, 3]

// Pop an element from the stack
console.log(stack.pop()); // Output: 3

// Peek at the top element of the stack
console.log(stack.peek()); // Output: 2

// Print the stack
stack.print(); // Output: [1, 2]
