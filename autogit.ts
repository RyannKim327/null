class Stack<T> {
    private items: T[] = [];

    // Add an element to the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Remove and return the top element of the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size(): number {
        return this.items.length;
    }

    // For debugging: return the stack contents as an array
    toArray(): T[] {
        return [...this.items]; // Return a shallow copy of the items array
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.toArray()); // Output: [1, 2]
