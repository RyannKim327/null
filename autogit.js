class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  printStack() {
    let stackString = "";
    for (let element of this.stack) {
      stackString += element + " ";
    }
    return stackString.trim();
  }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.printStack()); // Output: 1 2 3
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.printStack()); // Output: 1 2
