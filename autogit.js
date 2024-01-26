class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());    // Output: 3
console.log(stack.peek());   // Output: 2
console.log(stack.size());   // Output: 2
console.log(stack.isEmpty());  // Output: false

stack.clear();
console.log(stack.size());   // Output: 0
console.log(stack.isEmpty());  // Output: true
