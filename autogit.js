class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove the top element from the stack and return it
  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Get the top element of the stack without removing it
  peek() {
    if (this.items.length === 0) {
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
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.pop()); // Output: "Stack is empty"

console.log(stack.isEmpty()); // Output: true

stack.push(4);
console.log(stack.size()); // Output: 1

stack.clear();
console.log(stack.isEmpty()); // Output: true
