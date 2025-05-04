class Stack<T> {
    private items: T[] = [];

    // Method to add an element to the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Method to remove the top element from the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // Method to view the top element of the stack without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Method to get the size of the stack
    size(): number {
        return this.items.length;
    }

    // Method to clear the stack
    clear(): void {
        this.items = [];
    }

    // Method to print the stack elements (for debugging)
    print(): void {
        console.log(this.items);
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3
console.log(stack.size());  // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.isEmpty()); // Output: false
stack.print(); // Output: [ 1, 2 ]
stack.clear();
console.log(stack.isEmpty()); // Output: true
