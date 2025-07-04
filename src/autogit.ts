class Stack<T> {
    private items: T[] = [];

    // Pushes an element onto the stack
    push(element: T): void {
        this.items.push(element);
    }

    // Removes the top element from the stack and returns it
    pop(): T | undefined {
        return this.items.pop();
    }

    // Returns the top element without removing it
    peek(): T | undefined {
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

    // Returns the items in the stack (for debugging purposes)
    toArray(): T[] {
        return this.items.slice(); // Return a copy of the items array
    }
}

// Example usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());  // Output: 3
console.log(stack.pop());    // Output: 3
console.log(stack.isEmpty()); // Output: false
console.log(stack.size());    // Output: 2
console.log(stack.toArray()); // Output: [1, 2]
stack.clear();
console.log(stack.isEmpty()); // Output: true
