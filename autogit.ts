class Stack {
  private items: any[];

  constructor() {
    this.items = [];
  }

  push(element: any): void {
    this.items.push(element);
  }

  pop(): any {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek(): any {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  printStack(): void {
    console.log(this.items);
  }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
stack.printStack(); // Output: [1, 2]
