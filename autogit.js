class Stack {
  constructor() {
    this.items = []; // Initialize an empty array to store stack elements
  }
  
  // Push: Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the element at the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow: Stack is empty";
    }
    return this.items.pop();
  }

  // Peek: Return the element at the top of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // PrintStack: Print all the elements in the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
  }
}

// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements:", stack.printStack());

console.log("Top element:", stack.peek());

console.log("Popped element:", stack.pop());
console.log("Stack elements after pop:", stack.printStack());

console.log("Is stack empty:", stack.isEmpty());
