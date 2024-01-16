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
      return "Stack is empty!";
    }
    return this.stackArray.pop();
  }

  // Return the top element from the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
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

  // Print the elements of the stack
  print() {
    console.log(this.stackArray);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log("Stack elements:", stack.size()); // Output: 4
console.log("Top element:", stack.peek()); // Output: 40
console.log("Popped element:", stack.pop()); // Output: 40
console.log("Stack elements (after pop):", stack.size()); // Output: 3
stack.print(); // Output: [10, 20, 30]
