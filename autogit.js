class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let stackString = "";
    for (let i = 0; i < this.items.length; i++) {
      stackString += this.items[i] + " ";
    }
    console.log("Stack: " + stackString);
  }
}

// Usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack(); // Output: Stack: 1 2 3

console.log("Popped element: " + stack.pop()); // Output: Popped element: 3

console.log("Top element: " + stack.peek()); // Output: Top element: 2

console.log("Is the stack empty: " + stack.isEmpty()); // Output: Is the stack empty: false
