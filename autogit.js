class Stack {
    constructor() {
        this.stack = [];
    }

    // Push element onto the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.stack.length === 0) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    // Peek at the top element of the stack
    peek() {
        return this.stack[this.stack.length - 1];
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
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());  // Outputs 3
console.log(stack.peek()); // Outputs 2
console.log(stack.size()); // Outputs 2
console.log(stack.isEmpty()); // Outputs false
