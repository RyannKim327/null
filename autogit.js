class Stack {
  constructor() {
    this.stack = [];
  }

  // push an element onto the top of the stack
  push(item) {
    this.stack.push(item);
  }

  // remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack.pop();
  }

  // return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack[this.stack.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // return the size of the stack
  size() {
    return this.stack.length;
  }

  // clear the stack
  clear() {
    this.stack = [];
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: "Stack is empty."

console.log(stack.isEmpty()); // Output: true
