class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Remove and return the topmost element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stackArray.pop();
  }

  // Return the topmost element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
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
  printStack() {
    console.log(this.stackArray);
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
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
stack.printStack(); // Output: [1, 2]
