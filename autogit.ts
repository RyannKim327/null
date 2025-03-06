class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Add an item to the top of the stack
    public push(item: T): void {
        this.items.push(item);
    }

    // Remove and return the item from the top of the stack
    public pop(): T | undefined {
        return this.items.pop();
    }

    // Return the item at the top of the stack without removing it
    public peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return the size of the stack
    public size(): number {
        return this.items.length;
    }

    // Clear the stack
    public clear(): void {
        this.items = [];
    }
}

// Example usage
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true
