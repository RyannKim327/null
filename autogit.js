class Stack {
  constructor() {
    this.items = []; // array to store stack elements
  }

  // push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // remove and return the top element of the stack
  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // return the top element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // return the size of the stack
  size() {
    return this.items.length;
  }

  // clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Output: 3

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
