class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Get the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());    // Output: 30
console.log(stack.peek());   // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size());   // Output: 2

stack.clear();
console.log(stack.isEmpty()); // Output: true
