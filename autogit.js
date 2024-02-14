class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    } else {
      throw new Error('Stack is empty.');
    }
  }

  // Return the top element of the stack without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      throw new Error('Stack is empty.');
    }
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.stack.length;
  }

  // Print the elements of the stack
  print() {
    console.log(this.stack.join(' '));
  }
}

// Example usage
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
console.log('Size:', stack.size()); // Output: Size: 4
stack.print(); // Output: 5 10 15 20
console.log('Top:', stack.peek()); // Output: Top: 20
console.log('Popped:', stack.pop()); // Output: Popped: 20
console.log('Size:', stack.size()); // Output: Size: 3
stack.print(); // Output: 5 10 15
