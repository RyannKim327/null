class Stack<T> {
    private items: T[] = [];

    // Push an item onto the stack
    public push(item: T): void {
        this.items.push(item);
    }

    // Pop an item off the stack
    public pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // or throw an error
        }
        return this.items.pop();
    }

    // Peek at the top item of the stack without removing it
    public peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the stack
    public size(): number {
        return this.items.length;
    }

    // Clear the stack
    public clear(): void {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Outputs: 3
console.log(stack.peek()); // Outputs: 2
console.log(stack.size()); // Outputs: 2
