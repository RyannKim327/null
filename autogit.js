class Stack {
  constructor() {
    this.stack = [];
  }
  
  push(element) {
    this.stack.push(element);
  }
  
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
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
  
  size() {
    return this.stack.length;
  }
  
  printStack() {
    console.log(this.stack);
  }
}

// Testing the stack implementation
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

stack.printStack(); // Output: [5, 10, 15]

console.log(stack.pop()); // Output: 15

console.log(stack.peek()); // Output: 10

console.log(stack.size()); // Output: 2
