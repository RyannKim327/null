class Stack {
  constructor() {
    this.stack = [];
  }

  // Adds an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Removes and returns the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty!';
    }
    return this.stack.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty!';
    }
    return this.stack[this.stack.length - 1];
  }

  // Returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.stack.length === 0;
  }

  // Returns the number of elements in the stack
  size() {
    return this.stack.length;
  }

  // Prints all the elements in the stack
  print() {
    console.log(this.stack);
  }
}

// Usage:
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
console.log('Stack:', stack.print()); // Output: [5, 10, 15]

console.log('Pop:', stack.pop()); // Output: 15
console.log('Top element:', stack.peek()); // Output: 10

console.log('Stack size:', stack.size()); // Output: 2
console.log('Is empty?', stack.isEmpty()); // Output: false
