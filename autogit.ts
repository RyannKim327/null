class Stack<T> {
    private items: T[] = [];

    // Add an item onto the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Remove and return the top item
    pop(): T | undefined {
        return this.items.pop();
    }

    // View the top item without removing
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Optional: size of the stack
    size(): number {
        return this.items.length;
    }
}
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.size()); // 2
