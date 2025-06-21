class Stack<T> {
  private items: T[] = [];

  // Push an item onto the stack
  push(item: T): void {
    this.items.push(item);
  }

  // Pop the top item from the stack and return it
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack is empty. Cannot pop from an empty stack.");
    }
    return this.items.pop();
  }

  // Peek at the top item without removing it
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size(): number {
    return this.items.length;
  }

  // Optional: Clear the stack
  clear(): void {
    this.items = [];
  }
}
const stack = new Stack<number>();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack size:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 30

// Pop elements from the stack
console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack size after pop:", stack.size()); // Output: 2

// Check if the stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Output: false

// Clear the stack
stack.clear();
console.log("Is stack empty after clear?", stack.isEmpty()); // Output: true
