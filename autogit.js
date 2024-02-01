class Stack {
  constructor() {
    this.array = []; // Initialize an empty array to hold the stack elements
  }

  push(element) {
    this.array.push(element); // Add an element to the top of the stack
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.array.pop(); // Remove and return the top element from the stack
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.array[this.array.length - 1]; // Return the top element of the stack
  }

  isEmpty() {
    return this.array.length === 0; // Check if the stack is empty
  }

  size() {
    return this.array.length; // Return the size of the stack
  }

  print() {
    console.log(this.array); // Print the stack elements
  }
}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print(); // Output: [1, 2, 3]

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2

console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
