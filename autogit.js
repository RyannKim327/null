class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Pops the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stackArray.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    return this.isEmpty() ? "Stack is empty" : this.stackArray[this.stackArray.length - 1];
  }

  // Returns true if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Returns the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Prints the elements of the stack
  printStack() {
    console.log(this.stackArray);
  }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack(); // Output: [1, 2, 3]

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3

stack.printStack(); // Output: [1, 2]
