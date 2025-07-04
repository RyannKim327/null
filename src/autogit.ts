class Stack<T> {
    private items: T[] = [];

    // Push an item onto the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Pop an item from the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // Or throw an error
        }
        return this.items.pop();
    }

    // Peek at the top item of the stack without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // Or throw an error
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

    // Clear the stack
    clear(): void {
        this.items = [];
    }

    // Print the stack (for debugging)
    print(): void {
        console.log(this.items);
    }
}
const stack = new Stack<number>();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Print the stack
stack.print(); // Output: [1, 2, 3]

// Peek at the top element
console.log(stack.peek()); // Output: 3

// Pop an element from the stack
console.log(stack.pop()); // Output: 3

// Check the size of the stack
console.log(stack.size()); // Output: 2

// Check if the stack is empty
console.log(stack.isEmpty()); // Output: false

// Clear the stack
stack.clear();
console.log(stack.isEmpty()); // Output: true
