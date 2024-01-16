class Stack {
  constructor() {
    this.stack = []; // Initialize an empty array
  }

  push(element) {
    this.stack.push(element); // Add element to the top of the stack
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop(); // Remove element from the top of the stack and return it
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1]; // Returns the element at the top of the stack without removing it
  }

  size() {
    return this.stack.length; // Returns the number of elements in the stack
  }

  isEmpty() {
    return this.stack.length === 0; // Returns true if the stack is empty, false otherwise
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      console.log(this.stack.join(" > ")); // Print the elements of the stack in order
    }
  }
}

// Usage
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.print(); // Output: 5 > 10 > 15 > 20

console.log("Popped:", stack.pop()); // Output: Popped: 20
console.log("Top element:", stack.peek()); // Output: Top element: 15

console.log("Size:", stack.size()); // Output: Size: 3
console.log("Is empty?", stack.isEmpty()); // Output: Is empty? false
