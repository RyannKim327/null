class Stack {
  constructor() {
    this.stack = [];
  }

  // Push element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Peek at the top element of the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Print the stack elements
  printStack() {
    console.log(this.stack);
  }
}

// Test the stack implementation
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack(); // [1, 2, 3]

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2

stack.printStack(); // [1, 2]
