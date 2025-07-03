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

  // Look at the top element without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the number of elements in the stack
  size(): number {
    return this.items.length;
  }

  // Clear the stack
  clear(): void {
    this.items = [];
  }
}
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());   // Output: 30
console.log(stack.pop());    // Output: 30
console.log(stack.pop());    // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size());    // Output: 1
