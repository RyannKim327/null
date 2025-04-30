class Stack<T> {
  private items: T[] = [];

  // Add an element to the top of the stack
  push(element: T): void {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the stack’s size
  size(): number {
    return this.items.length;
  }

  // Optional: Clear the stack
  clear(): void {
    this.items = [];
  }
}

// Usage example:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop());  // Outputs: 20
console.log(stack.peek()); // Outputs: 10
console.log(stack.isEmpty()); // Outputs: false
