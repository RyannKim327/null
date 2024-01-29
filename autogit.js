class Stack {
  constructor() {
    this.stackArray = []; // Empty array to store stack elements
  }

  // Push an element onto the stack
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

  // Return the top element of the stack without removing it
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

  // Return the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Print the stack elements
  printStack() {
    console.log(this.stackArray.join(" "));
  }
}


// Example usage:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack size:", stack.size()); // Output: 3
stack.printStack(); // Output: 1 2 3

console.log("Top element:", stack.peek()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 3
stack.printStack(); // Output: 1 2
