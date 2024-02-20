class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Pop element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stackArray.pop();
  }

  // Peek at the top element of the stack
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
}

// Example usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // Output: 3
console.log(myStack.peek()); // Output: 2
console.log(myStack.size()); // Output: 2
console.log(myStack.isEmpty()); // Output: false
