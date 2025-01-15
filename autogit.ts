class Stack<T> {
  private elements: T[] = [];

  push(element: T): void {
    this.elements.push(element);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

stack.pop();
stack.pop();

console.log(stack.isEmpty()); // true
const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

console.log(stringStack.pop()); // "world"
