class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }
}

// Example usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek()); // Output: 3

console.log(myStack.pop()); // Output: 3
console.log(myStack.pop()); // Output: 2
console.log(myStack.pop()); // Output: 1
console.log(myStack.pop()); // Output: "Stack is empty"
