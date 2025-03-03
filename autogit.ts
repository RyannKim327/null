class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Remove and return the top element of the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // Return the top element without removing it
    peek(): T | undefined {
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

    // For debugging: print the stack
    print(): void {
        console.log(this.items);
    }
}
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());  // Output: 3
console.log(stack.size());   // Output: 3

console.log(stack.pop());    // Output: 3
console.log(stack.pop());    // Output: 2

stack.print();               // Output: [1]
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
