class Stack<T> {
  private items: T[] = [];

  // Add an item to the top of the stack
  push(item: T): void {
    this.items.push(item);
  }

  // Remove and return the top item from the stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // View the top item without removing it
  peek(): T | undefined {
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
}

// Usage:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.size()); // 1
