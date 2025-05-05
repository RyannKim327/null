class Stack<T> {
    private items: T[] = [];

    // Adds an element to the top of the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Removes and returns the top element of the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // If the stack is empty, return undefined
        }
        return this.items.pop();
    }

    // Returns the top element of the stack without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // If the stack is empty, return undefined
        }
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Returns the size of the stack
    size(): number {
        return this.items.length;
    }

    // Clears the stack
    clear(): void {
        this.items = [];
    }
}

// Example usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Outputs: 2
console.log(stack.pop());  // Outputs: 2
console.log(stack.size()); // Outputs: 1
