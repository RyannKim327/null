class Stack {
    constructor() {
        this.stack = [];
    }

    // Push element onto the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop element from the top of the stack
    pop() {
        if (this.stack.length === 0) {
            return "Stack is empty. Cannot pop.";
        }
        return this.stack.pop();
    }

    // Peek the top element of the stack
    peek() {
        if (this.stack.length === 0) {
            return "Stack is empty. Cannot peek.";
        }
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

    // Print the stack
    print() {
        console.log(this.stack);
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3

stack.print(); // Output: [1, 2]
