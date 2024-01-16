class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Removes and returns the top element from the stack
  pop() {
    if (this.isEmpty()) return null;
    return this.stackArray.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) return null;
    return this.stackArray[this.stackArray.length - 1];
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Returns the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Removes all elements from the stack
  clear() {
    this.stackArray = [];
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
