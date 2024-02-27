class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print the elements of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Example usage
let stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack()); // 1 2 3

console.log(stack.peek()); // 3

console.log(stack.pop()); // 3
console.log(stack.printStack()); // 1 2
