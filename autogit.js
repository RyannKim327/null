class Stack {
    constructor() {
        this.stack = [];
    }

    // Push an element onto the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    // Peek at the top element of the stack without removing it
    peek() {
        return this.isEmpty() ? "Stack is empty" : this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.stack.length;
    }
}

// Example usage
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.peek()); // Output: 15
console.log(stack.pop()); // Output: 15
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
