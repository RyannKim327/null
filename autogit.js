class Stack {
  constructor() {
    this.stack = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pops an element from the stack and returns it
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack.pop();
  }

  // Returns the topmost element without removing it from the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack[this.stack.length - 1];
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Returns the size of the stack
  size() {
    return this.stack.length;
  }

  // Clears the stack
  clear() {
    this.stack = [];
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());   // Output: 3
console.log(stack.pop());    // Output: 3
console.log(stack.size());   // Output: 2
console.log(stack.isEmpty());  // Output: false

stack.clear();
console.log(stack.isEmpty());  // Output: true
