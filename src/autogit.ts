class Stack<T> {
  private stack: T[] = [];

  // Push an element onto the stack
  push(element: T): void {
    this.stack.push(element);
  }

  // Pop the top element from the stack
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot pop from an empty stack.");
    }
    return this.stack.pop();
  }

  // Peek at the top element of the stack
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size(): number {
    return this.stack.length;
  }

  // Clear the stack
  clear(): void {
    this.stack = [];
  }
}

// Example usage:
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30
console.log("Stack size:", stack.size());   // Output: 3

console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack size after pop:", stack.size()); // Output: 2

console.log("Is stack empty?", stack.isEmpty()); // Output: false

stack.clear();
console.log("Is stack empty after clear?", stack.isEmpty()); // Output: true
