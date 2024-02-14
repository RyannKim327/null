class Stack {
  constructor() {
    this.stackArray = []; // array to store stack elements
  }

  // push an element to the top of the stack
  push(element) {
    this.stackArray.push(element);
  }

  // remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stackArray.pop();
  }

  // return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stackArray[this.stackArray.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // get the size of the stack
  size() {
    return this.stackArray.length;
  }

  // clear the stack
  clear() {
    this.stackArray = [];
  }
}
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop()); // Output: 15
console.log(stack.peek()); // Output: 10
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2

stack.clear();
console.log(stack.isEmpty()); // Output: true
