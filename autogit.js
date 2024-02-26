class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

// Usage
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

myStack.print(); // Output: [1, 2, 3]

console.log(myStack.pop()); // Output: 3
console.log(myStack.pop()); // Output: 2

console.log(myStack.peek()); // Output: 1

console.log(myStack.size()); // Output: 1

myStack.print(); // Output: [1]
