class Stack<T> {
    private items: T[] = [];
    
    // Adds an item to the top of the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Removes and returns the item from the top of the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            console.warn("Stack is empty");
            return undefined;
        }
        return this.items.pop();
    }

    // Returns the item at the top of the stack without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            console.warn("Stack is empty");
            return undefined;
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

// Example Usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // Outputs: 3
console.log(stack.peek()); // Outputs: 2
console.log(stack.isEmpty()); // Outputs: false
console.log(stack.size()); // Outputs: 2
stack.clear();
console.log(stack.isEmpty()); // Outputs: true
