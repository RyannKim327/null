class Stack<T> {
    private items: T[] = [];

    // Add an item to the top of the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Remove and return the item from the top of the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // Return the item at the top of the stack without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return the number of items in the stack
    size(): number {
        return this.items.length;
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.size());  // Output: 2
console.log(stack.isEmpty()); // Output: false
