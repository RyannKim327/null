class Stack<T> {
  private arr: T[] = [];

  public push(item: T): void {
    this.arr.push(item);
  }

  public pop(): T | undefined {
    return this.arr.pop();
  }

  public peek(): T | undefined {
    return this.arr[this.arr.length - 1];
  }

  public isEmpty(): boolean {
    return this.arr.length === 0;
  }

  public size(): number {
    return this.arr.length;
  }
}
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 2
